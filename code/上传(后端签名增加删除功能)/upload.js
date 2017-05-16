
accessid = ''
accesskey = ''
host = ''
policyBase64 = ''
signature = ''
callbackbody = ''
filename = ''
key = ''
expire = 0
g_object_name = ''
g_object_name_type = ''
now = timestamp = Date.parse(new Date()) / 1000;

//存储图片数组
var picAddress=[];

function check_object_radio() {
     var tt = document.getElementsByName('myradio');
    g_object_name_type = 'random_name';  //随机名字
}

function random_string(len) {
　　len = len || 32;
　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
　　var maxPos = chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
    　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function get_suffix(filename) {
    pos = filename.lastIndexOf('.');
    suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix;
}

function calculate_object_name(filename)
{
    if (g_object_name_type == 'local_name')
    {
        g_object_name += "${filename}"
    }
    else if (g_object_name_type == 'random_name')
    {
        suffix = get_suffix(filename)
        g_object_name = key + random_string(10) + suffix
    }
    return ''
}

function get_uploaded_object_name(filename)
{
    if (g_object_name_type == 'local_name')
    {
        tmp_name = g_object_name
        tmp_name = tmp_name.replace("${filename}", filename);
        return tmp_name
    }
    else if(g_object_name_type == 'random_name')
    {
        return g_object_name
    }
}

function set_upload_param(up, filename, ret)
{
    if (ret == false)
    {
        now = timestamp = Date.parse(new Date()) / 1000;
        if (expire < now + 3) {
            $.ajax({
                url: 'https://v2.api.yihuzhijia.cn/media/upload/sign',
                type: 'get',
                dataType: 'json',
                success: function (obj) {
                    host = obj['host']
                    policyBase64 = obj['policy']
                    accessid = obj['accessid']
                    signature = obj['signature']
                    expire = parseInt(obj['expire'])
                    callbackbody = obj['callback']
                    key = obj['dir'];

                    get_sign_callback(up, filename);
                }
            })
        }
    } else {
        get_sign_callback(up, filename);
    }

}

function get_sign_callback(up, filename){
    g_object_name = key;
    if (filename != '') {
        suffix = get_suffix(filename)
        calculate_object_name(filename)
    }
    new_multipart_params = {
        'key' : g_object_name,
        'policy': policyBase64,
        'OSSAccessKeyId': accessid,
        'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
        'signature': signature,
    };

    up.setOption({
        'url': host,
        'multipart_params': new_multipart_params
    });

    up.start();
}

var uploader = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'selectfiles',
    //multi_selection: false,
	container: document.getElementById('container'),
	flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
	silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
    url : 'http://oss.aliyuncs.com',

	init: {
		PostInit: function() {
			document.getElementById('ossfile').innerHTML = '';
			document.getElementById('postfiles').onclick = function() {
            set_upload_param(uploader, '', false);
                /*var templateString1 = document.getElementById("moban1").innerHTML;
                 //console.log(templateString1);
                 $("#ossfile>div").each(function(i){
                 $(this).append(templateString1);
                 });*/
            return false;
			};
            /*只能单个文件上传*/
            $('input[type=file]').prop('multiple',false);
		},


        FilesAdded: function(up, files) {
            plupload.each(files, function(file) {
                document.getElementById('ossfile').innerHTML += '<div id="' + file.id + '">' + '<em onclick="deletePic()" class="deleteBox"></em>' +'<img id="' + file.id + 'pic">'+'<span class="' + file.id + 'tijiao"></span>'+'<b></b>'
                    +'<div class="' + file.id + 'progress progress"><div class="progress-bar" style="width: 0%"></div></div>'
                    +'</div>';
            });
            document.getElementById('postfiles').onclick()
        },

		BeforeUpload: function(up, file) {
            check_object_radio();
            set_upload_param(up, file.name, true);
        },

		UploadProgress: function(up, file) {
			 var d = document.getElementById(file.id);
			 //d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
             var prog = d.getElementsByTagName('div')[0];
			 var progBar = prog.getElementsByTagName('div')[0]
			 progBar.style.width= 2*file.percent+'px';
			 progBar.setAttribute('aria-valuenow', file.percent);
		},

        FileUploaded: function(up, file, info) {
            if (info.status == 200)
            {
                // document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);;
                var pic=get_uploaded_object_name(file.name).split('/')[1];
                picAddress.push(pic);
                console.log(picAddress);
                var picname = get_uploaded_object_name(file.name);
                if(!pic){
                    document.getElementById(file.id+'pic').src="./images/upfail.png";
                }
                else{
                    document.getElementById(file.id+'pic').src="https://cdn.yihuzhijia.cn/"+picname+"?x-oss-process=style/h";
                }
                document.querySelector('.'+file.id+'tijiao').style.display = 'none';
                document.querySelector('.'+file.id+'progress').style.display = 'none';
            }
            else
            {
                document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
            }


        },

		Error: function(up, err) {
			document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
		}
	}
});

uploader.init();

$(function () {
    /*提交*/
    $('#submit').on('touchend',function (e) {
        e.stopPropagation();
        var options=$("#test option:selected");  //获取选中的项
        var type=options.val();   //拿到选中项的值
        //console.log(type)

        var piclen=picAddress.length;
        var boxlen=$('#ossfile>div').length;
        //console.log(piclen);
        //console.log(boxlen);
        if(piclen==boxlen && piclen){
            showModal();
        }else{
            showalertbox();
            $('.alertbox').html('还未上传完毕');
            setTimeout(function(){
                $('.alertbox').hide(1000);
            },2000);
        }


        /* $.ajax({
         url : 'http://192.168.0.76:8080/teacher/show',
         type : 'get',
         async : true,
         data : {type :type,address:picAddress},
         dataType : 'json',
         success : function(data){
         console.log(data);
         showModal();

         },
         //小菊花
         beforeSend: function(){
         showloading()
         },
         complete:function(){
         hideloading();
         }
         });*/

    });

    $('.confirm').on('touchend',function (e) {
        e.stopPropagation();
        hideModal();
        $('#ossfile>div').remove();
        picAddress=[];
    });

    /*不能超过9张*/
    $('#container').click(function (e) {
        var len=$('#ossfile>div').length;
        if(len>=9){
            e.preventDefault();
        }
    });






    function showModal() {
        $('.modal-wrap').css('display','block');
        $('.modal').css('display','block')
    }

    function hideModal() {
        $('.modal-wrap').css('display','none');
        $('.modal').css('display','none')
    }
    




    /*弹出小菊花*/
    function showloading(){
        $('.loading-modal').css('display',"block");
        $('.loading').css('display',"block");
    }

    /*隐藏小菊花*/
    function hideloading(){
        $('.loading-modal').css('display',"none");
        $('.loading').css('display',"none");
    }



    function showalertbox(){
        $('.alertbox').show(1000);
        $('.alertbox').css("-webkit-transform",'translateX(-50%)');
        $('.alertbox').css("transform",'translateX(-50%)');
    }



})
