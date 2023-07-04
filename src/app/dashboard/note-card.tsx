"use client";

import { H3 } from "~/components/typography";
import { type RouterOutputs } from "~/lib/api/types";

type Props = Pick<
  RouterOutputs["example"]["getCurrentUserNotes"][0],
  "id" | "title" | "text"
>;

export default function NoteCard({ id, title, text }: Props) {
  return (
    <div className="grid md:flex md:items-center gap-5 md:justify-between border dark:border-stone-700 rounded p-4">
      <div className="">
        <H3>{title}</H3>
        <p className="line-clamp-2">{text}</p>
      </div>
      {/* <div className="grid grid-cols-2 md:flex gap-4">
        <EditNote id={id} title={title} text={text} />
        <Button
          disabled={isDeleting}
          variant="destructive"
          onClick={() => deleteNote({ id })}
        >
          Delete
          {isDeleting && <Loader2 className="animate-spin ml-2 w-4" />}
        </Button>
      </div> */}
    </div>
  );
}
