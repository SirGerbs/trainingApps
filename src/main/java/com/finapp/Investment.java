package com.finapp;

import java.util.Objects;
import java.util.Dictionary;
import java.util.Hashtable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Investment {

	private @Id @GeneratedValue Long id;
	private double investment;
	private int years;
	private double interest;

	private Investment() {
        calcGrowth();
    }

	public Investment(double investment, int years, double interest) {
		this.investment = investment;
		this.years = years;
		this.interest = interest;
	}

    public String calcGrowth() {
        //Hashtable<Integer, Double> growthDetails = new Hashtable<Integer, Double>();
        String result = new String();
        result = "Test";    
        return result;
       /*  for (int i = 1; i <= years; i++) {
            investment = investment * (1 + (interest / 100)); //investment after a year's interest
            investment = Math.round(investment * 100.0) / 100.0; // round to two decimal places
            growthDetails.put(i, investment);
        }

        return growthDetails; */
    }

	public int hashCode() {

		return Objects.hash(id, investment, years, interest);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getInvestment() {
		return investment;
	}

	public void setInvestment(double investment) {
		this.investment = investment;
	}

	public int getyears() {
		return years;
	}

	public void setyears(int years) {
		this.years = years;
	}

	public double getinterest() {
		return interest;
	}

	public void setinterest(double interest) {
		this.interest = interest;
	}

	@Override
	public String toString() {
		return "ROI{" +
			"id=" + id +
			", investment='" + investment + '\'' +
			", years='" + years + '\'' +
			", interest='" + interest + '\'' +
			'}';
	}
}
// end::code[]