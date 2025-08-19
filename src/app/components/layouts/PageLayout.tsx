interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <>
        <div style={{ display: "flex", padding: "5px 5px 5px 5px" }}>
          <div>
            <main>{children}</main>
          </div>
        </div>
      </>
  );
}
