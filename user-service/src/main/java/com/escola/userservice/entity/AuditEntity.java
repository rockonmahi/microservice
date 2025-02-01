package com.escola.userservice.entity;

import jakarta.persistence.*;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;


@MappedSuperclass
public class AuditEntity implements Serializable, BaseEntity {

	private static final long serialVersionUID = -4830465869390632481L;

	@Column(name = "Created_Date", nullable = false, length = 10)
	private Timestamp createdDate;

	@Column(name = "Created_By", nullable = false, length = 10)
	private String createdBy;

	@Column(name = "Updated_Date", nullable = true, length = 10)
	private Timestamp updatedDate;

	@Column(name = "Updated_By", nullable = true, length = 10)
	private String updatedBy;
	
	@Column(name = "Remarks", nullable = true, length = 100)
	private String remarks;

	@Column(name = "Record_Status",nullable = false, length=1)
	private Integer recordStatus;

	public Integer getRecordStatus() {
		return recordStatus;
	}

	public void setRecordStatus(Integer recordStatus) {
		this.recordStatus = recordStatus;
	}

	public Timestamp getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}

	public Timestamp getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Timestamp updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	@PrePersist
	public void onPreInsert() {
		this.setCreatedBy("10");
		this.setCreatedDate(getTimeStamp());
		this.setUpdatedBy("10");
		this.setUpdatedDate(getTimeStamp());
	}

	@PreUpdate
	public void onPreUpdate() {
		this.setUpdatedBy("11");
		this.setUpdatedDate(getTimeStamp());
	}

	@PreRemove
	public void onPreDelete() {
		this.setUpdatedBy("12");
		this.setUpdatedDate(getTimeStamp());
	}

	private Timestamp getTimeStamp() {
		Timestamp currentTimestamp = new Timestamp(new Date().getTime());
		return currentTimestamp;
	}
}