var React    = require('react');
var TreeMenu = require('react-tree-menu').TreeMenu,
    TreeNode = require('react-tree-menu').TreeNode;

var MyTreeMenu = React.createClass({

  getInitialState: function() {
    return {
      lastAction1: null,
      lastAction2: null,
      lastAction3: null
    };
  },

  render() {

    var statefulExample = this._getExamplePanel("Stateful", this._getStatefulTreeExample());
 
    return (
      <div className="col-lg-8"> {statefulExample} </div>
    )
  },

  _setLastActionState: function (action, col, node) {

    var toggleEvents = ["collapsed", "checked", "selected"];

    if (toggleEvents.indexOf(action) >= 0) {
      action += "Changed";
    }

    console.log("Controller View received tree menu " + action + " action: " + node.join(" > "));

    var key = "lastAction" + col;

    var mutation = {};
    mutation[key] = {
      event: action,
      node: node.join(" > "),
      time: new Date().getTime()
    };

    this.setState(mutation)
  },

  _getStatefulTreeExample: function () {

    return (
      <TreeMenu
        identifier="id"
        stateful={true}
        onTreeNodeClick={this._setLastActionState.bind(this, "clicked", "4")}
        onTreeNodeCollapseChange={this._setLastActionState.bind(this, "collapsed", "4")}
        onTreeNodeCheckChange={this._setLastActionState.bind(this, "checked", "4")}
        expandIconClass="fa fa-chevron-right"
        collapseIconClass="fa fa-chevron-down">
        <TreeNode label="Option 1" checkbox={true} id="option_1"/>
        <TreeNode label="Option 2" checkbox={true} id="option_2">
          <TreeNode label="Option A" checkbox={true} id="option_2.a"/>
          <TreeNode label="Option B" checkbox={true} id="option_2.b">
            <TreeNode label="Option B.x" checkbox={true} id="option_2.b.x"/>
            <TreeNode label="Option B.y" checkbox={true} id="option_2.b.y"/>
          </TreeNode>
        </TreeNode>
      </TreeMenu>
    );
  },

  _getExamplePanel: function (title, treeMenuNode) {
    return <div>
      <div className="panel panel-default">
        <div className="panel-heading">{title + " Menu"}</div>
        <div className="panel-body">
          {treeMenuNode}
        </div>
      </div>
    </div>;
  }

});

module.exports = MyTreeMenu;
