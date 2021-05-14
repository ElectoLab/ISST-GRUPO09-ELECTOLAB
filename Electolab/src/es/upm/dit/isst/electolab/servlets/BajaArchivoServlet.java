package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;



import javax.servlet.ServletException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;

import javax.ws.rs.core.MediaType;

import es.upm.dit.isst.electolab.dao.USUARIODAOImplementation;
import es.upm.dit.isst.electolab.model.URLHelper;
import org.glassfish.jersey.client.ClientConfig;


import es.upm.dit.isst.electolab.model.USUARIO;

@WebServlet("/BajaArchivoServlet")
public class BajaArchivoServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	 

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String email = (String) (req.getParameter("usuarioemail"));
        USUARIO usuario = USUARIODAOImplementation.getInstance().read(email);
        resp.setContentType("application/csv");
        resp.setHeader("Content-Disposition", String.format("attachment; filename=\"%s\"", "Simulacion1.csv"));
        resp.setContentLength(usuario.getDocument().length);
        resp.getOutputStream().write(usuario.getDocument());
    }
}