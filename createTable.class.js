import { HttpClass } from "./http.class.js";

export class createTable {
  TablelHeaderHtml = (HeaderName) => `<th>${HeaderName}</th>`;

  #httpClient;
  constructor(options) {
    this.options = options;
    this.#httpClient = new HttpClass();
    this.#httpClient.request({ url: options.url }).then((data) => {
      this.inject(options, data);
    });
  }
  inject(options, data) {
    const { rootElement } = options;
    const assembledHTML = `<thead>
    <tr id="table-header">${this.buildHeaderHtml(data)}</tr>
      </thead><tbody id="table-body">${this.buildBodyHtml(data)}</tbody>`;

    const selector = rootElement || "body";
    document.querySelector(
      selector
    ).innerHTML = `<table id="json-table">${assembledHTML}</table>`;
  }
  buildHeaderHtml(data) {
    return data.table.columns.map((column) => this.TablelHeaderHtml(column.name)).join("");
  }
  

  buildBodyHtml(data) {
    return data.table.rows.map((row) => {
        const cellsHtml = data.table.columns.map((column) => {
            const columnName = column.name;
            return `<td>${row[columnName]}</td>`;
        }).join("");
        return `<tr>${cellsHtml}</tr>`;
    }).join("");
}

}
