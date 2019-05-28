import { queryBanner } from "@/service/api"

export function getBanners(){
  queryBanner().then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}