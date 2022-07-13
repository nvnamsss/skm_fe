import React, { ReactElement, useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import { getEvent, listEvent } from "../services/Event";

function Remembrance(): ReactElement {
    const TimelineData = {
        "items": [
            {
                "title": "title",
                "created_at": "created at",
                "content": `short content`,
                "tags": ["dependablebot", "hi mom", "clmmm"]
            },
            {
                "title": "title",
                "created_at": "Feb",
                "content": "content"
            }
        ]
    }
    useEffect(() => {
        async function call() {
            let res = await listEvent();
            // setQuoteData(res.data);
            // console.log("get quotes of the day: ", quoteData);
            // setLike(res.data.like);
        }
        call();
    }, []);

    
    return (
        <>
            <Header></Header>

            <div className="archive post-type-archive post-type-archive-changelog font-mktg hfeed no-sidebar hero-image">
                <h1 className="gutter-spacious font-modern-computer">- Ở đây chưa có giao diện</h1>
                <h1 className="gutter-spacious font-modern-computer">- Đây là thứ sẽ hỗ trợ thẻ nhớ giúp đan thanh lục tung kí ức mỗi khi thẻ nhớ temporarily unavailable</h1>
                <h1 className="gutter-spacious font-modern-computer">- Sẽ được thiết kế để đan thanh có thể dễ dàng tìm kiếm chỉ với vài từ khóa ít ỏi</h1>
                <h1 className="gutter-spacious font-modern-computer">- Đang thi công...</h1>
            </div>
            <div className="archive post-type-archive post-type-archive-changelog font-mktg hfeed no-sidebar">
                <Timeline items={TimelineData.items}></Timeline>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Remembrance;