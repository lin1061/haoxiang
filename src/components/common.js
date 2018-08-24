export function LinkH5(url){
	wx.navigateTo({
      url:'/pages/h5/main?url='+url
    })
}