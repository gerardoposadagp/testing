interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <>
      <div
        className="box-border border-1 p-4 ..."
        style={{ width: "900px", height: "800px" }}
      >
        <div style={{ display: "flex", padding: "5px 5px 5px 5px" }}>
          <div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
