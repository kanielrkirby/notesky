import { Editor, EditorState, RichUtils, ContentState } from "draft-js";
import { useState } from "react";
import "draft-js/dist/Draft.css";

export default function NoteEditor({ content }: { content: string }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(content)),
  );

  function handleKeyCommand(command: string, editorState: EditorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
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
            if ((e.key === "s" || e.key === "S") && (e.metaKey || e.ctrlKey)) {
              return "save";
            }
            return "not-handled";
          }}
        />
      </div>
    </div>
  );
}
