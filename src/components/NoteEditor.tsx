import Draft, {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  convertFromRaw,
  RawDraftContentState,
  convertToRaw,
} from "draft-js";
import { useState } from "react";
import "draft-js/dist/Draft.css";

export default function NoteEditor({
  content,
  saveContent,
}: {
  content?: RawDraftContentState;
  saveContent: (content: RawDraftContentState) => Promise<void>;
}) {
  const clean = content ? convertFromRaw(content) : undefined;
  const [editorState, setEditorState] = useState(() =>
    clean ? EditorState.createWithContent(clean) : EditorState.createEmpty(),
  );
  function handleKeyCommand(command: string, editorState: EditorState) {
    switch (command) {
      case "bold":
        setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
        return "handled";
      case "italic":
        setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
        return "handled";
      case "underline":
        setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
        return "handled";
      case "save":
        const raw = convertToRaw(editorState.getCurrentContent());
        saveContent(raw);
        return "handled";
      default:
        return "not-handled";
    }
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex w-full flex-row justify-end gap-8">
        <button
          className="flex items-center justify-center rounded-xl bg-[#00000000] py-2 px-4 hover:bg-[#00000040] dark:bg-[#ffffff00] hover:dark:bg-[#ffffff40]"
          onClick={() =>
            setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
          }
        >
          B
        </button>
        <button
          className="flex items-center justify-center rounded-xl bg-[#00000000] py-2 px-4 hover:bg-[#00000040] dark:bg-[#ffffff00] hover:dark:bg-[#ffffff40]"
          onClick={() =>
            setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))
          }
        >
          I
        </button>
        <button
          className="flex items-center justify-center rounded-xl bg-[#00000000] py-2 px-4 hover:bg-[#00000040] dark:bg-[#ffffff00] hover:dark:bg-[#ffffff40]"
          onClick={() =>
            setEditorState(
              RichUtils.toggleInlineStyle(editorState, "UNDERLINE"),
            )
          }
        >
          U
        </button>
      </div>
      <div className="flex h-full w-full flex-col">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={(e) => {
            const key = e.key.toLowerCase();
            if (!["b", "i", "u", "s"].includes(key)) return null;
            if (e.metaKey || e.ctrlKey) {
              switch (key) {
                case "b":
                  return "bold";
                case "i":
                  return "italic";
                case "u":
                  return "underline";
                case "s":
                  return "save";
              }
            }
            return null;
          }}
        />
      </div>
    </div>
  );
}
