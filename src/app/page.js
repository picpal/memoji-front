import MainViewer from "../components/MainViewer";

export default function Home() {
  let content = "# Hello \n";
  content += " ```sql\n select * From dual \n```";

  return (
    <div>
      <MainViewer content={content} />
    </div>
  );
}
