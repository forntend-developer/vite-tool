import { renderMemo, type MemoData } from "../card"
import { main } from "../main";
import type { Tables } from "../supabase/database.types";
// import type { Database, Tables } from "../supabase/database.types";
import { supabase } from "../supabase/supabase";
import gsap from "gsap";

export async function fetchMemo() {

  const {data, error} = await supabase.from('memo').select();

  main.innerHTML = '';


  //let a:Database['public']['Tables']['memo']['Row']
  // let a:Tables<'memo'>['priority']
  // if (error){

  // }
  

  // if(data){
  // data.forEach((d:MemoData)=>{
  //     renderMemo(main,d)
  //   })
  // }

  data && data.forEach((d)=>{
    renderMemo(main,d)
  })

  // console.log(result);
}


export async function deleteMemo(id:number) {
  const response = await supabase
  .from('memo')
  .delete()
  .eq('id', id)
  .select() 
  

  fetchMemo()

  //console.log(data);
  
}


export async function insertMemo({
  title, 
  description, 
  priority
}:Pick<Tables<'memo'>,'title' | 'description' | 'priority'>) {
  
const {error} = await supabase.from('memo').insert({
  title,
  description,
  priority
})

fetchMemo()

const tl = gsap.timeline()
  .to('.pop',{y:'100%', ease:'power3.inOut'})
  .to('#dialog',{autoAlpha:0, duration:0.2})

}