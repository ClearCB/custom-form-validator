
/**
 * In this class we store all the functions that generate raw
 * html
 */
export class HtmlGenerator {

    /**
     * We generat new input field
     */
    generateNewInput(inputId, inputName) {
        return `
        <div class="col text-center">
            <div class="row">
                <div class="col">
                    <label id="label_${inputId}" for="${inputId}">${inputName}</label>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input type="text" id="${inputId}" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span id="validation_${inputId}"></span>
                </div>
            </div>
		</div>
        `;
    }

    /**
     * We generate a new section title
     */
    generateNewHeader(headerName) {
        return `
        <div class="col text-center">
            <h1>
                ${headerName}
            </h1>
        </div>
        `;
    }

    /**
     * We generate a new row content
     */
    addNewRow(actualContent) {

        return `
        <div class="row mt-3">
            ${actualContent}
        </div>
        `
    }


    /**
     * We generate a new error message
     */
    addNewErrorRow(content) {
        return `
        <div class="row">
            <div class="col">
                <span><p class="text-danger">ERROR:  ${content}</p></span>
            </div>
        </div>`
    }


    /**
     * We generate a new table row
     */
    generateTableRow(contentName, contentValue) {

        return `
            <td class="font-weight-bold" >${contentName}</td>
            <td class="text-primary">${contentValue}</td>
            `
    }

    /**
     * We generate a new table open
     */
    openTableInformation(contentNameTitle, contentValueTitle) {

        return `
        <table class="table">
            <thead>
                <tr>
                    <th>${contentNameTitle}</th>
                    <th>${contentValueTitle}</th>
                </tr>
            </thead>
            <tbody id="tableDataContent">
            </tbody>
        </table>
        `
    }

    /**
     * We generate a close a table
     */
    closeTableInformation() {
        return `
        </table>
        `
    }

    /**
     * We generate an input color 
     */
    addNewColorInput(colorValue) {
        return `
        <input type="color" value="${colorValue}" disabled>
        `
        // <div class="row mt-2 d-flex justify-content-center align-items-center">
        // </div>
    }
}