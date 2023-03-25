import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import supabase from "../utils/supabase";

export default function Note() {
  const { id } = useParams();

  console.log(id);
  const { data, isLoading, error } = useQuery(["note"], async () => {
    const { data: note } = await supabase.from("notes").select("*");
    console.log(note);
    return note;
  });

  console.log(data);

  return <h1>Note</h1>;
}
