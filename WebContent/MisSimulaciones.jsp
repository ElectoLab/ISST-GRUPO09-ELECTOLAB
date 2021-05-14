<!DOCTYPE html>
<html>
<head></head>
<body>
<form action="DownloadFileServlet" method="post" enctype="multipart/form-data">
<a href=\"UploadFileServlet?fileName="+fileItem.getName()+"\">Download"+${fileItem.getName()}</a>
</form>
</body>
</html>