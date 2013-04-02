package com.bbh.openbbh.api.resource;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

import org.bson.types.ObjectId;

import com.bbh.openbbh.api.dao.ReportSchema;

@Path("/reportschema")
public class ReportSchemaResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Model> findAll() {
		return ReportSchema.findAll();
	}

	// for JAXB example
	@XmlRootElement(name="reportSchema")
	public static class Model {
		ObjectId _id;
		private String title;
		private String label;
		private String name;
		private boolean selected;
		private int position;
		private String criterion;

		public ObjectId get_id() {
			return _id;
		}

		public void set_id(ObjectId _id) {
			this._id = _id;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getLabel() {
			return label;
		}

		public void setLabel(String label) {
			this.label = label;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public boolean isSelected() {
			return selected;
		}

		public void setSelected(boolean selected) {
			this.selected = selected;
		}

		public int getPosition() {
			return position;
		}

		public void setPosition(int position) {
			this.position = position;
		}

		public String getCriterion() {
			return criterion;
		}

		public void setCriterion(String criterion) {
			this.criterion = criterion;
		}
	}
}
