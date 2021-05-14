package es.upm.dit.isst.electolab.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Simulacion implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	private String email;
	private int numero;
	private String csv;
	 
	
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((csv == null) ? 0 : csv.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + numero;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Simulacion other = (Simulacion) obj;
		if (csv == null) {
			if (other.csv != null)
				return false;
		} else if (!csv.equals(other.csv))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (numero != other.numero)
			return false;
		return true;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getCsv() {
		return csv;
	}

	public void setCsv(String csv) {
		this.csv = csv;
	}

	public Simulacion() {
		
	}

	
	
}

