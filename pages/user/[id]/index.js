import {useRouter} from "next/router";

export default function UserDetail() {
  const router = useRouter();
  const {id} = router.query;
  return (
    <div>
      <h1>User Detail ID: {id}</h1>
    </div>
  )
}


export const getStaticProps = async(context) => {
  //const res = await fetch(url)
  //console.log((context))
  //const user = await res.json();

  // return {
  //   props: {
  //     user
  //   }
  // }



}