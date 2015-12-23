var React = require('react');

module.exports = React.createClass({
  render() {
    // var data = this.props.items;
    return (
      <TreeView data={data} />,
      document.getElementById('treeview')
    )
  }
});

