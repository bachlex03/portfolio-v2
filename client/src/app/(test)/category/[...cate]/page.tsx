export default function CategoryPage({
   params,
}: {
   params: { cate: string[] };
}) {
   console.log(params);

   return (
      <div>
         <h1>Category Page</h1>
      </div>
   );
}
