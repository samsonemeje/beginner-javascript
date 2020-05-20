const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role='tab']");
const tabPanels = tabs.querySelectorAll("[role='tabpanel']");

function handleTabClick(event) {
    // hide all tab panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });

    // mark all tabs as unselected
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    });

    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);

    // find the associated tab panel and show it!
    const { id } = event.currentTarget;
    const tabpanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabpanel.hidden = false;
}


tabButtons.forEach(button => button.addEventListener('click', handleTabClick));