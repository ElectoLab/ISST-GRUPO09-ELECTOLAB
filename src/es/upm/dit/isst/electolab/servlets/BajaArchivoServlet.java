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

import es.upm.dit.isst.electolab.model.URLHelper;
import org.glassfish.jersey.client.ClientConfig;


import es.upm.dit.isst.electolab.model.USUARIO;

@WebServlet("/BajaArchivoServlet")
public class BajaArchivoServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;


@Override

protected void doGet(HttpServletRequest req, HttpServletResponse resp)

    throws ServletException, IOException {

  // autorizacion: any

  String email = req.getParameter("usuarioemail");

  Client client = ClientBuilder.newClient(new ClientConfig());

  USUARIO usuario = null;

  try {   usuario=client.target(URLHelper.getURL()+"/"+ email)

      .request().accept(MediaType.APPLICATION_JSON).get(USUARIO.class);

  }catch(Exception e) {}

  if ((usuario != null)  && (usuario.getDocument() != null)){

    resp.setContentType("application/pdf");

    resp.setHeader("Content-Disposition"

          , String.format("attachment; filename=\"%s\"", "memoria.pdf"));

    resp.setContentLength(usuario.getDocument().length);

    resp.getOutputStream().write(usuario.getDocument());

  }

}
}