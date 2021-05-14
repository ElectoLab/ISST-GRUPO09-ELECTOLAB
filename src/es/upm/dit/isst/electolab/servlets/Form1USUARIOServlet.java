package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.electolab.dao.USUARIODAOImplementation;
import es.upm.dit.isst.electolab.model.USUARIO;

@WebServlet("/Form1USUARIOServlet")
public class Form1USUARIOServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		String name = req.getParameter("name");
		
			USUARIO usuario = new USUARIO();
			usuario.setEmail(email);
			usuario.setPassword(password);
			usuario.setName(name);
			USUARIODAOImplementation.getInstance().create(usuario);
			req.getSession().setAttribute("usuario", usuario);
		
		getServletContext().getRequestDispatcher("/index.html").forward(req, resp);
	}
}
