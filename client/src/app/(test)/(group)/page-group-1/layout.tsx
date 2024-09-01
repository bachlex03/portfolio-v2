export default function LayoutPageGroup1({
   children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <div>
         <h1>Layout Page group 1</h1>
         {children}
      </div>
   );
}
