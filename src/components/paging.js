import React from 'react';

class Paging extends React.Component {
    goPage(env) {
        var l = $(env.target);
        var gopage = l.data("gopage");
        this.props.goPage(gopage);
    }


    render() {
        var lis = [];
        var pageNow = this.props.pageNow;
        var pageSize = this.props.pageSize;
        var count = this.props.count;
        var pageCount = 1;
        if (count != 0) {
            pageCount = Math.floor((count - 1) / pageSize) + 1;
        }
        if (pageNow == 1) {
            lis.push({num: "<<", className: "unavailable"});
        } else {
            lis.push({num: "<<", className: "", go: pageNow - 1});
        }

        if (pageNow < 4) {
            for (var i = 1; i <= pageNow; i++) {
                if (i == pageNow) {
                    lis.push({num: i, className: "current"});
                } else {
                    lis.push({num: i, className: "", go: i});
                }
            }

        } else {
            lis.push({num: 1, className: "", go: 1});
            lis.push({num: ".....", className: "unavailable"});
            lis.push({num: pageNow - 1, className: "", go: pageNow - 1});
            lis.push({num: pageNow, className: "current"});
        }

        if (pageNow == pageCount) {
            lis.push({num: ">>", className: "unavailable"});
        } else {

            if (pageCount - pageNow > 3) {
                lis.push({num: pageNow + 1, className: "", go: pageNow + 1});
                lis.push({num: ".....", className: "unavailable"});
                lis.push({num: pageCount, className: "", go: pageCount});
            } else {
                for (var i = pageNow + 1; i <= pageCount; i++) {
                    lis.push({num: i, className: "", go: i});
                }
            }
            if (pageCount == pageNow) {
                lis.push({num: ">>", className: "unavailable"});
            } else {
                lis.push({num: ">>", className: "", go: pageNow + 1});
            }

        }
        return ( <ul className="pagination">
            {lis.map(function (item, i) {
                return (
                    <li key={"paging" + item.num + "-" + pageNow} className={item.className}>
                        <a data-gopage={item.go}
                           onClick={this.goPage}
                           href="#">{item.num}</a>
                    </li>
                );
            }, this)}
        </ul>);
    }
}

export default Paging;

