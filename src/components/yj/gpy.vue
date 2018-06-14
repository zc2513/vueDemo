<template>
    <div>
     <div> 单位统计 </div>
        <object classid="clsid:15D142CD-E529-4B01-9D62-22C9A6C00E9B" id="DBSwordScan" width="1165px" style="background-color:#ccc;" height="600" codebase="/static/cabs/ScanOnWeb.cab#version=1,0,0,10">
            <param name="licenseMode" value="3">
            <param name="key1"
            value="xAf+dM9+GKs/Z1IlZApHcy7idfE3EHUbOmfbYWWutzT6ntfEyP/3R49GxpadSmU/gJR0RGp5C20875B8N5ybJkCREEpcGuDKfH6FYORwIdOv+aGYX4ZvBHHTiz9K7AML8wx4qiDXe+1Dq3Y3ZDq9lAIWDXK7ufFukFY0MFYeWZ7PYETgx50i3Q==">
            <param name="key2"
            value="txeYCNR5SlTqBV3CSbVvnhMDGBmk51uSSiDlhy8MS1jo5d9EDe2mmZnwS5QDBJimVWB8hVD/LhmedyVdCQlLhuOROHRmfkx5kWLzSseeAQsitp+42NdtBWx5jDElXG3TbE6VYCKjPS0bv52vRZVAIUuCG3M0QS2DD3BcJ70ep0SmwGbtOnFi1BTz/vIQjUqIp0beVY2JOoPoU2RliS7rgOj05wEb/YO17eC1kjZHysoGXdYv5yan7wz06GntChiONJaKid9AMJy6+/bcOh35MYED9Xp+lik7uW7rhgiX9PxxeEBHjjwPdV7IoqNNK9ITY8mnxMGZtLkMwzShMAVZ5b3+/0IHX71oBSQxW8XrMO/pqXHdGqOQ/iyTzPlSqIoj4QmdlJ4+MtfucenWsfsXnwatQroU2+APMfc0cs5/IW1NrTX9q9NEwYT6GI7sJxQJpGIjjUgUmkUoK4hii6Rrrkpx5NxgOve8n/GpXoFsonEZmUEgnGEFSQwdujbO909b4imHpHZ0YghucM+AocH3HjYLPlxXarTYXt3MhGTJkGF9R2SjPv+o9OALTRRdj8QkVo9ce+jwMSdwPeGP4t4ZpFzU6Bg31K1tqFp2L403adTP+4EsJS9SKH76c68iJri6drKOcYknieLKXR5fMv2wiB7SfyFGTpjNnIFJiSr3PLH9PY91Vl0iPyaIZbg1c70CxhczcMDGD3cVrOR0ZyZt2INbTHos0ZweaqZiVSJXhcTvp96YH2uy3o6lnwEBXVO0fLeSMQgHXgU7fZoF0yiFL9EROz7sHKyfVrR7lww09RWy4O+Z0OmAInD0ePUibMtkiEdxI4KwMSVzTE5tpJ/4G4PZOjqLHNHC/iwLiNOg0LWnLS3R59qb+OpU09MviLu/dMtQ1rawW7M+549IIdm7WaZVi6ldL17pBFGA0ButJJRpsFR0T+sC4bHo87PHOoUtHQSkQaudLE2efFECOsgmyt/r5M/wSgI/pey5fE/emhsYAAT+b+ROIHmvxGSS/8p8Ghy0zAGIK+EHnk1Iqxe79bG9HJCI9M7DtsrsjOMBgZ8+Hcu19MQR/pp6Q7IbRb3aqNjLXHbFOKjFFuGs5bnbHs03ujwj/Hc2/pUi1bu8JOf4SWHnfX5SLkXzOdv1GjGjyf/dtd6lKRPWUd6wgpsFBZht5Kie43RvFEvby951Fd1nyRyXkoP/+exRN+EsCp/6BVZh5ZR0ovxYiiYMU0gucF43EOizERRv0VxRFI3WpHPT2X9+kiCGp7Vh2fHGa/545tZ7k/mD0Zg1hyXZWzC9c0CV05nUCBOc">
        </object>
        <button @click="uploadImg">上传照片</button>
       <div>
            <img style="width:200px;height:200px;" :src="msg" alt="">
       </div>
        <p v-text="msg"></p>
    </div>
</template>
<script>
export default {
  name:'unitcmg',
  data(){
      return{
          msg:'',
          imgAddress:'d:\\sealImgs\\gmoulageImg',
      }
  },
  mounted(){
      this.load_config()
  },
  methods:{
      uploadImg(){
          var base64_data = document.getElementById('DBSwordScan').jpegBase64Data();
          this.msg = base64_data+''
          let data = {
              'picData':base64_data,
              'picExt':'.jpg'
          }
          this.$http.post('/common/attachmentUploadByBase64',data).then(res=>{
              console.log(res.data);
          })
          document.getElementById("DBSwordScan").saveToFile(this.imgAddress+'\\'+Date.now()+'.jpg');
      },
      load_config(){
          document.getElementById('DBSwordScan').setDpi(300,300)
      }
  }
}
</script>
