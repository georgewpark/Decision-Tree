const tabs = document.querySelectorAll('.decision-tree__tab')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabActive = tab.getAttribute('aria-selected')

    // Check tab not already active
    if (tabActive === 'false') {
      // Close previous sub-tabs
      const parentTabPanel =
        tab.closest('.decision-tree__panel') || tab.closest('.decision-tree')
      const activeTabs = parentTabPanel.querySelectorAll(
        '[aria-selected="true"]'
      )

      activeTabs.forEach(activeTab => {
        const prevTabPanelId = activeTab.getAttribute('aria-controls')
        const prevTabPanel = document.querySelector(`#${prevTabPanelId}`)

        activeTab.setAttribute('aria-selected', 'false')

        prevTabPanel.classList.add('hidden')
      })

      // Activate new tab
      const newTabPanelId = tab.getAttribute('aria-controls')
      const newTabPanel = document.querySelector(`#${newTabPanelId}`)

      tab.setAttribute('aria-selected', 'true')

      newTabPanel.classList.remove('hidden')
      newTabPanel.focus()
    }
  })
})
