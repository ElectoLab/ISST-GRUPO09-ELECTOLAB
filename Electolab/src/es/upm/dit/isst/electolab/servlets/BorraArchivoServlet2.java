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
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import es.upm.dit.isst.electolab.dao.USUARIODAO;
import es.upm.dit.isst.electolab.dao.USUARIODAOImplementation;
import es.upm.dit.isst.electolab.model.URLHelper;
import org.glassfish.jersey.client.ClientConfig;

import es.upm.dit.isst.electolab.model.USUARIO;
//https://stackoverflow.com/questions/2422468/how-to-upload-files-to-server-using-jsp-servlet

@WebServlet("/BorraArchivoServlet2")

@MultipartConfig

public class BorraArchivoServlet2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    USUARIO usuario = (USUARIO) req.getSession().getAttribute("usuario");
    
   
    
    usuario.deleteDoc2();
    
    USUARIODAOImplementation.getInstance().update(usuario);        
    req.getSession().setAttribute("usuario", usuario);
    getServletContext().getRequestDispatcher("/MisSimulaciones.jsp").forward(req,resp);
}
}