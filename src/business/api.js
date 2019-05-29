import { queryBanner, login } from "@/service/api"

export function getBanners(){
  return queryBanner().then(res=>{
    return res
  }).catch(err=>{
    return err
  })
}

export function userLogin(data){
  return login(data).then(res=>{
    return res
  }).catch(err=>{
    return err
  })
}