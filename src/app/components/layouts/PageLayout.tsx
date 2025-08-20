interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <>
      <div style={{ display: "flex", padding: "15px 15px 15px 35px" }}>
        <main>{children}</main>
      </div>
    </>
  );
}
