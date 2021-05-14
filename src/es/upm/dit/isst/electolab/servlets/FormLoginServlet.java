package es.upm.dit.isst.electolab.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.electolab.dao.USUARIODAOImplementation;
import es.upm.dit.isst.electolab.model.USUARIO;

@WebServlet("/FormLoginServlet")
public class FormLoginServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	private final String ADMIN_EMAIL = "root";
	private final String ADMIN_PASSWORD = "root";	
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		
		List<USUARIO> usuarios = USUARIODAOImplementation.getInstance().readAll();
		USUARIO usuario = USUARIODAOImplementation.getInstance().login(email, password);

		if( ADMIN_EMAIL.equals(email) && ADMIN_PASSWORD.equals(password) ) {
			req.getSession().setAttribute("admin", true);
			req.getSession().setAttribute("usuarios", usuarios);
			getServletContext().getRequestDispatcher("/Admin.jsp").forward(req,resp);
		} else if ( null != usuario ) {
			req.getSession().setAttribute("usuario", usuario);
			getServletContext().getRequestDispatcher("/USUARIO.jsp").forward(req,resp);
		} else	{
			getServletContext().getRequestDispatcher("/index.html").forward(req,resp);
		}
	}
}
