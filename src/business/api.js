import { queryBanner, login } from "@/service/api"

export function getBanners(){
  queryBanner().then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}

export function userLogin(data){
  login(data).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}