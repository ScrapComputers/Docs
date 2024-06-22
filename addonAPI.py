import os
import shutil

# Helpers
def capitalize_char_at_position(string, position):
    if position < 0 or position >= len(string):
        raise ValueError("Position out of range")
    return string[:position] + string[position].upper() + string[position+1:]

# Main Code

ROOT_DIR = os.path.dirname(__file__)

def copy_modules_from_luaapi_to_addonapi():
	FROM_DIR = os.path.join(ROOT_DIR, "content", "docs", "Lua API"  , "static-functions-namespaces")
	TO_DIR   = os.path.join(ROOT_DIR, "content", "docs", "Addon API", "modules"                    )

	EXCLUDED_FILE_NAMES = ["_index.md", "sc.md", "sc_fontmanager.md"]

	RENAME_FROM = "sc_"
	RENAME_TO   = ""

	NAMESPACE_ROOT_NAME_FROM = "sc."
	NAMESPACE_ROOT_NAME_TO   = "sm.scrapcomputers."

	for file in os.listdir(FROM_DIR):
		FILE_DIR = os.path.join(FROM_DIR, file)
		OUT_FILE_DIR = os.path.join(TO_DIR, file.replace(RENAME_FROM, RENAME_TO))

		if file not in EXCLUDED_FILE_NAMES:
			print(f"MODULE | Copying {FILE_DIR} to {OUT_FILE_DIR}")
			shutil.copyfile(FILE_DIR, OUT_FILE_DIR)
		else:
			continue

		data = ""

		f = open(FILE_DIR, "r")
		data = f.read()
		data = data.replace(NAMESPACE_ROOT_NAME_FROM, NAMESPACE_ROOT_NAME_TO).replace("title: \"sm.scrapcomputers.", "title: \"").replace("/docs/lua-api", "/docs/addon-api")

		text = "---\ntitle: \""
		title_pos = data.find(text)

		if title_pos == -1:
			text = "---\r\ntitle: \""
			title_pos = data.find(text)
			if title_pos == -1:
				raise BaseException("SHIT!")

		data = capitalize_char_at_position(data, title_pos + len(text))

		f.close()

		f2 = open(OUT_FILE_DIR, "w")
		f2.write(data)
		f2.flush()
		f2.close()

def copy_userdata_from_luaapi_to_addonapi():
	FROM_DIR = os.path.join(ROOT_DIR, "content", "docs", "Lua API"  , "user-data")
	TO_DIR   = os.path.join(ROOT_DIR, "content", "docs", "Addon API", "user-data")

	EXCLUDED_FILE_NAMES = ["_index.md", "hologram-object.md"]

	NAMESPACE_ROOT_NAME_FROM = "sc."
	NAMESPACE_ROOT_NAME_TO   = "sm.scrapcomputers."

	for file in os.listdir(FROM_DIR):
		FILE_DIR = os.path.join(FROM_DIR, file)
		OUT_FILE_DIR = os.path.join(TO_DIR, file)

		if file not in EXCLUDED_FILE_NAMES:
			print(f"USER-DATA | Copying {FILE_DIR} to {OUT_FILE_DIR}")
			shutil.copyfile(FILE_DIR, OUT_FILE_DIR)
		else:
			continue

		data = ""

		f = open(FILE_DIR, "r")
		data = f.read()
		data = data.replace(NAMESPACE_ROOT_NAME_FROM, NAMESPACE_ROOT_NAME_TO).replace("/docs/lua-api", "/docs/addon-api")

		f.close()

		f2 = open(OUT_FILE_DIR, "w")
		f2.write(data)
		f2.flush()
		f2.close()

if __name__ == "__main__":
	copy_modules_from_luaapi_to_addonapi()
	copy_userdata_from_luaapi_to_addonapi()
