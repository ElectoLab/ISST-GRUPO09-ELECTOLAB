package es.upm.dit.isst.electolab.servlets;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import es.upm.dit.isst.electolab.dao.USUARIODAOImplementation;


import es.upm.dit.isst.electolab.model.USUARIO;
//https://stackoverflow.com/questions/2422468/how-to-upload-files-to-server-using-jsp-servlet

@WebServlet("/SubeArchivoServlet")

@MultipartConfig

public class SubeArchivoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    USUARIO usuario = (USUARIO) req.getSession().getAttribute("usuario");
    
    Part filePart = req.getPart("file");
    InputStream fileContent = filePart.getInputStream();
    ByteArrayOutputStream output = new ByteArrayOutputStream();
    byte[] buffer = new byte[1024];
    for (int length = 0; (length = fileContent.read(buffer)) > 0;)
        output.write(buffer, 0, length);
    
    
    
    if (usuario.getDocument() == null) {
    usuario.setDocument(output.toByteArray());
    }else if (usuario.getDocument() != null && usuario.getDocument2() == null) {
    	usuario.setDocument2(output.toByteArray());
    } else if ((usuario.getDocument() != null) && (usuario.getDocument2() != null) && (usuario.getDocument3() == null)) {
    	usuario.setDocument3(output.toByteArray()); 
    	
    }else if ((usuario.getDocument() != null) && (usuario.getDocument2() != null) && (usuario.getDocument3() != null) && (usuario.getDocument4() == null)) {
    	usuario.setDocument4(output.toByteArray()); 
    	
    }else if ((usuario.getDocument() != null) && (usuario.getDocument2() != null) && (usuario.getDocument3() != null)&& (usuario.getDocument4() != null)&& (usuario.getDocument5() == null)) {
    	usuario.setDocument5(output.toByteArray()); 
    	
    }
    USUARIODAOImplementation.getInstance().update(usuario);        
    req.getSession().setAttribute("usuario", usuario);
    getServletContext().getRequestDispatcher("/USUARIO.jsp").forward(req,resp);
}
}
