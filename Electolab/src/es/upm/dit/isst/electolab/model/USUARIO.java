package es.upm.dit.isst.electolab.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

@Entity
public class USUARIO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	private String email;
	private String password;
	private String name;
	
	@Lob
	private byte [] document;
	@Lob
	private byte [] document2;
	@Lob
	private byte [] document3;
	@Lob
	private byte [] document4;
	@Lob
	private byte [] document5;
	
	
	public byte[] getDocument4() {
		return document4;
	}


	public void setDocument4(byte[] document4) {
		this.document4 = document4;
	}


	public byte[] getDocument5() {
		return document5;
	}


	public void setDocument5(byte[] document5) {
		this.document5 = document5;
	}

	
	
public USUARIO() {
		
	}


	public byte[] getDocument2() {
		return document2;
	}

	public void setDocument2(byte[] document2) {
		this.document2 = document2;
	}

	public byte[] getDocument3() {
		return document3;
	}

	public void setDocument3(byte[] document3) {
		this.document3 = document3;
	}


	
	public byte[] getDocument() {
		return document;
	}

	public void setDocument(byte[] document) {
		this.document = document;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void deleteDoc() {
		this.document=null;
	}
	public void deleteDoc2() {
		this.document2=null;
	}
	public void deleteDoc3() {
		this.document3=null;
	}
	public void deleteDoc4() {
		this.document4=null;
	}
	public void deleteDoc5() {
		this.document5=null;
	}
	
}
