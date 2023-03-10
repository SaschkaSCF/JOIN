function generateContactList(contact, j) {
    return `
        <div onclick="showContactDetails(${j})" class="contact-list-box" title="show contact details">
            <div id="contactColor" class="contact-letters small-letters" style="background-color: ${contact.color}">
                ${contact.firstName.charAt(0).toUpperCase()}${contact.lastName.charAt(0).toUpperCase()}
            </div>
            <div class="contact-details">
                <div class="contact-name">${contact.lastName} ${contact.firstName}</div>
                <div class="contact-email">${contact.email}</div>
            </div>
        </div>
    `;
}


function showContactDetailsHTML(selectedContact, i) {
    return `
        <div onclick="closeContactOverlay()" class="close-btn close-btn-overlay">
            <img class="close-icon" src="./assets/img/arrow_left.svg" alt="#">
        </div>
        <div class="contact-selection">
            <div id="selectedContactColor" class="contact-letters big-letters" style="background-color: ${selectedContact.color}">${selectedContact.lastName.charAt(0)} ${selectedContact.firstName.charAt(0)}</div>
            <div>
                <div class="contact-information-name">${selectedContact.lastName} ${selectedContact.firstName}</div>
                <div title="add new task" onclick="addTaskContact(${i})" class="contact-add-task">+ Add Task</div>
            </div>
        </div>
        <div class="contact-information-title">
            <p>Contact Information</p>
            <div title="edit contact info" onclick="editContact(${i})" class="contact-edit"><img class="contact-edit-icon" src="./assets/img/edit_icon.svg">Edit Contact</div>
        </div>
        <h4>Email</h4>
        <div class="contact-email">${selectedContact.email}</div>
        <h4>Phone</h4>
        <div class="contact-name">${selectedContact.phone}</div>
        <div class="icon-bottom-right" title="edit contact info" onclick="editContact(${i})"><img class="edit-pencil-icon" src="./assets/img/edit_pencil.svg"></div>
    `;
}


function openEditContactFormHTML(selectedContact) {
    return `
        <div id="contactForm" class="contact-form-overlay">
            <div class="contact-form-left">
                <img class="contact-form-logo" src="./assets/img/Logo-Join.png" alt="#">
                <span class="contact-form-heading">Edit Contact</span>
                <img class="contact-form-underline" src="assets/img/underline.svg" alt="">
            </div>
            <div class="contact-form-right">
            <div id="selectedContactColor" class="contact-letters big-letters margin-letters" style="background-color: ${selectedContact.color}">${selectedContact.lastName.charAt(0)} ${selectedContact.firstName.charAt(0)}</div>
            <div class="contact-input-container">
                <div onclick="closeForm()" class="icon-top-right" title="close form">
                    <img class="contact-cancel-icon" src="./assets/img/contact-cancel-icon.svg" alt="#">
                </div>
                <form onsubmit="updateContact(); return false;">
                    <div class="form-group">
                        <input class="contact-input-field input-name-img" type="text" placeholder="First Name" id="firstName" name="firstName" value="${selectedContact.firstName}" required>
                    </div>
                    <div class="form-group">
                        <input class="contact-input-field input-name-img" type="text" placeholder="Last Name" id="lastName" name="lastName" value="${selectedContact.lastName}" required>
                    </div>
                    <div class="form-group">
                        <input class="contact-input-field input-email-img" type="email" placeholder="Email" id="email" name="email" value="${selectedContact.email}" required>
                    </div>
                    <div class="form-group">
                        <input class="contact-input-field input-phone-img" type="tel" placeholder="Phone" id="phone" name="phone" value="${selectedContact.phone}" required>
                    </div>
                    <div class="form-group">
                        <input class="p-none"type="color" id="color" name="color" value="${selectedContact.color}" required>
                    </div>
                    <div class="form-group btn-centered">
                        <button type="submit" class="contact-add-btn">
                            <p>Save</p>
                            <img class="contact-create-icon" src="./assets/img/contact-create-icon.svg" alt="#">
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    `;
}


function openAddTaskContactFormHTML() {
    return `
    <form id="formTaskContainer" class="contact-form-overlay" onsubmit="addTask(); return false;">
        <div class="add-form-left">
            <span class="contact-form-heading">Add Task</span>
            <div>
                <div class="selection-container">
                    <label>Title</label>
                    <input placeholder="Enter a title" id="title_textfield" required>
                </div>
                <div class="selection-container">
                    <label>Description</label>
                    <textarea placeholder="Enter a description" id="description_textfield" required></textarea>
                </div>
                <div class="selection-container prevent-select">
                    <label>Category</label>
                    <div class="select-wrapper" onclick="openDropdown('category-choices')">
                        <div class="sector_top">
                            <p id="category-header">Select your Category</p><img src="./assets/img/arrow_down.png">
                        </div>
                        <div class="category-choices d-none" id="category-choices">
                            <div class="category" onclick="changeCategoryHeader('Marketing')">
                                <div id="marketing">Marketing </div>
                                <div class="circle" style="background: #0038ff;"></div>
                            </div>
                            <div class="category" onclick="changeCategoryHeader('Media')">
                                <div>Media </div>
                                <div class="circle" style="background: #ffc702;"></div>
                            </div>
                            <div class="category" onclick="changeCategoryHeader('Backoffice')">
                                <div>Backoffice </div>
                                <div class="circle" style="background: #1FD7C1;"></div>
                            </div>
                            <div class="category" onclick="changeCategoryHeader('Design')">
                                <div>Design </div>
                                <div class="circle" style="background:  #ff7a00;"></div>
                            </div>
                            <div class="category" onclick="changeCategoryHeader('Sales')">
                                <div>Sales </div>
                                <div class="circle" style="background: #fc71ff;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="selection-container prevent-select">
                    <label>Assigned To</label>
                    <div class="select-wrapper assigned-to-wrapper">
                        <div class="sector_top" onclick="openDropdown('assigned-to-choices')">
                            <p id="assigned-to-header">Select your Members</p><img
                                src="./assets/img/arrow_down.png">
                        </div>
                        <div class="assigned-to-choices d-none" id="assigned-to-choices">
                            <div class="assigned-to" onclick="changeCategoryHeader('Marketing')">
                                <div id="marketing">Marketing </div>
                                <div class="circle" style="background: #0038ff;"></div>
                            </div>
                            <div class="assigned-to" onclick="changeCategoryHeader('Media')">
                                <div>Media </div>
                                <div class="circle" style="background: #ffc702;"></div>
                            </div>
                            <div class="assigned-to" onclick="changeCategoryHeader('Backoffice')">
                                <div>Backoffice </div>
                                <div class="circle" style="background: #1FD7C1;"></div>
                            </div>
                            <div class="assigned-to" onclick="changeCategoryHeader('Design')">
                                <div>Design </div>
                                <div class="circle" style="background:  #ff7a00;"></div>
                            </div>
                            <div class="assigned-to" onclick="changeCategoryHeader('Sales')">
                                <div>Sales </div>
                                <div class="circle" style="background: #fc71ff;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="seperator-line-container">
            <div class="separator-line"></div>
        </div>
        <div class="add-form-right">
            <div class="contact-input-container">
                <div onclick="closeAddTaskForm()" class="icon-top-right" title="close form">
                    <img class="contact-cancel-icon" src="./assets/img/contact-cancel-icon.svg" alt="#">
                </div>
                <div>
                    <div class="features-container">
                        <label for="date">Due Date</label>
                        <input class="date" type="date" id="date" name="date" required>
                    </div>
                    <div class="features-container">
                        <label>Prio</label>
                        <div onchange="changeColor(); return false" class="prio-btn-container">
                            <input type="radio" class="checkbox_urgen" id="urgentBtn" name="radio">
                            <label for="urgentBtn" class="prio-btn prio-urgent urgentSection" for="checkbox_urgen"
                                id="urgentSection">
                                Urgent<img id="prioUrgentWhite" src="assets/img/Prio-urgent.png">
                            </label>
                            <input type="radio" class="checkbox_medium" id="mediumBtn" name="radio">
                            <label for="mediumBtn" class="prio-btn prio-urgent mediumSection" for="checkbox_urgen"
                                id="mediumSection">
                                Medium<img id="prioUrgentWhite" src="assets/img/Prio-medium.png">
                            </label>
                            <input type="radio" class="checkbox_low" id="lowBtn" name="radio" checked>
                            <label for="lowBtn" class="prio-btn prio-urgent lowSection" for="checkbox_urgen"
                                id="lowSection">
                                Low<img id="prioUrgentWhite" src="assets/img/prio-low-white.png">
                            </label>
                        </div>
                        <div class="features-container">
                            <label>Subtasks</label>
                            <div class="subtask-container">
                                <input class="subtask-input" onclick="inputChangeSubIcons()"placeholder="Add new subtask" id="subtask">
                                <img id="plusSubtaskImg" class="plus-icon" src="assets/img/plus-icon.png" onclick="changeSubIcon()">
                                <div class="subtask-img-container">
                                <img id="clearSubtaskImg" src="assets/img/icon_cancel_subtask.svg" onclick="clearSubtask()" class="subtask-icons d-none">
                                <div class="gap-img-subtask"></div>
                                <img id="addSubtaskImg" src="assets/img/icon_check_subtask.svg" onclick="addSubtask()" class="subtask-icons d-none">
                                </div>
                            </div>
                            <div>
                                <ul id="subtask-list">
                                </ul>
                            </div>
                        </div>
                </div>
                <div class="contact-form-buttons btn-centered">
                    <button type="button" onclick="closeAddTaskForm()" class="contact-cancel-btn" title="close form">
                        <p>Cancel</p>
                        <img class="contact-create-icon" src="./assets/img/contact-cancel-icon.svg" alt="#">
                    </button>
                    <button type="submit" class="contact-add-btn" title="add new task">
                        <p>Create Task</p>
                        <img class="contact-create-icon" src="./assets/img/contact-create-icon.svg" alt="#">
                    </button>
                </div>
            </div>
        </div>
    </form>
    `;
}