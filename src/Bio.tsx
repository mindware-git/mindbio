import { useParams } from "react-router-dom";

export default function Bio() {
  const params = useParams();
  const id = params.id ?? "";

  return <div>hello {id}</div>;
}
