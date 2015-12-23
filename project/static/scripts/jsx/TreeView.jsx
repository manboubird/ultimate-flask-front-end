var React = require('react');

module.exports = React.createClass({
  render() {
    return (
      <TreeView data={data} />,
      document.getElementById('treeview')
    )
  }
});

