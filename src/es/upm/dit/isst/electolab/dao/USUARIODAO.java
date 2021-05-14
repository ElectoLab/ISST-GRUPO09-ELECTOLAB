package es.upm.dit.isst.electolab.dao;

import java.util.List;

import es.upm.dit.isst.electolab.model.USUARIO;

public interface USUARIODAO {
	
	public USUARIO login( String email, String password );
	
	public List<USUARIO> readAll();
	
	public void create( USUARIO usuario );
	public USUARIO read( String email );
	public void update( USUARIO usuario );
	public void delete( USUARIO usuario );
	
}
