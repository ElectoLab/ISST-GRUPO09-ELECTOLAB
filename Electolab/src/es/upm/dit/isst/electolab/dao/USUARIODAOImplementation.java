package es.upm.dit.isst.electolab.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import es.upm.dit.isst.electolab.model.USUARIO;

public class USUARIODAOImplementation implements USUARIODAO {

	public static USUARIODAOImplementation instance;
	private USUARIODAOImplementation() { }
	public static USUARIODAOImplementation getInstance() {
		if ( null == instance )
			instance = new USUARIODAOImplementation();
		return instance;
	}

	@SuppressWarnings("unchecked")
	@Override
	public USUARIO login(String email, String password) {
		Session session = SessionFactoryService.get().openSession();
		USUARIO usuario = null;
		session.beginTransaction();
		Query q = session.createQuery("select t from USUARIO t where t.email = :email and t.password = :password");
		q.setParameter("email", email);
		q.setParameter("password", password);
		List<USUARIO> usuarios = q.getResultList();
		if (usuarios.size() > 0)
			usuario = (USUARIO) (q.getResultList().get(0));
		session.getTransaction().commit();
		session.close();
		return usuario;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<USUARIO> readAll() {
		Session session = SessionFactoryService.get().openSession();
		List<USUARIO> usuarios = new ArrayList<>();
		session.beginTransaction();
		usuarios.addAll( session.createQuery("from USUARIO").list() );	
		session.getTransaction().commit();
		session.close();
		return usuarios;
	}

	@SuppressWarnings("unchecked")
	@Override
	public void create(USUARIO usuario) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.save(usuario);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public USUARIO read(String email) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		USUARIO usuario = session.get(USUARIO.class, email);
        session.getTransaction().commit();
		session.close();
		return usuario;
	}

	@SuppressWarnings("unchecked")
	@Override
	public void update(USUARIO usuario) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(usuario);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public void delete(USUARIO usuario) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(usuario);
		session.getTransaction().commit();
		session.close();
	}

}
