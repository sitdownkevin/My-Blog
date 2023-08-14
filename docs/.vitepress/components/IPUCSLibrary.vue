<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';

#body {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-family: 'Lato', sans-serif;
    min-width: 300px;
}

button.btn {
    --bs-btn-padding-y: .25rem;
    --bs-btn-padding-x: .5rem;
    --bs-btn-font-size: .75rem;
    border-radius: 8px;
    border: 1px solid #007bff;
}

.container-parent {
    min-height: calc(100vh - 134px);
}


@media screen and (max-width: 576px) {
    .double-line {
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
}

@media screen and (min-width: 576px) and (max-width: 850px) {
    .double-line {
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}

@media screen and (min-width: 850px) {
    .double-line {
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
}


.book-container>.book-cover {
    /* border: 1px solid black; */
    aspect-ratio: 3/4;
    position: relative;
}

.book-container>.book-cover>img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;

    user-select: none;
    -webkit-user-drag: none;
}

.book-container>.book-info {
    position: relative;
}


.book-title {
    text-align: left;
    font-size: 12px;
}


.book-tags {
    text-align: left;
    font-size: 10px;
}

.tag-IE {
    color: green;
}

.tag-CS {
    color: red;
}

.tag-ECE {
    color: blueviolet;
}

.tag-MEMS {
    color: rgb(4, 109, 247);
}

.tag-ME {
    color: rgb(222, 47, 164);
}

.tag-MATH {
    color: cadetblue;
}

.book-link {
    position: absolute;
    bottom: 0;
}


.header {
    background-color: #1c7cdd;
    color: white;
    /* width: 100vw; */
    height: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    user-select: none;
}

.header-title {
    font-size: large;
    font-family: 'Carter One', 'Rasa', serif;

    display: flex;
    flex-direction: row;
    align-items: center;
}

.footer {
    background-color: #1c7cdd;
    color: white;
    /* width: 100vw; */
    height: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    user-select: none;
    padding: 10px 10px 10px 10px;
}

.footer-quote {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Carter One', 'Rasa', serif;
    font-size: xx-small;
}
</style>

<template>
    <div id="body">
        <div class="container-parent">
            <div class="container text-center">
                <div class="row row-cols-1 mt-3">
                    <div class="col">
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Tags
                                </button>
                                <ul class="dropdown-menu"
                                    style="border: 1px solid #007bff; border-radius: 8px; margin-top: 5px;">
                                    <li v-for="tag in tags" :key="tag.name" style="cursor: pointer; font-size: .75rem;">
                                        <div :class="'dropdown-item ' + ((tag.name == selected_tags) ? 'active' : '')"
                                            @click="changeDisplay(tag.name)"><b>{{ tag.name }}</b></div>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" class="btn btn-outline-primary" disabled
                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                <b>{{ selected_tags }}</b>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
                    <div class="col" v-for="book in displayed_books">
                        <div class="row book-container p-3">
                            <div class="col-4 book-cover">
                                <img :src="book.cover" class="book-cover-img">
                            </div>
                            <div class="col-8 book-info">
                                <div class="row book-title">
                                    <div class="col-12 double-line"><b>{{ book.name }}</b></div>
                                </div>
                                <div class="row book-tags">
                                    <div class="col-12">
                                        <div :class="'tag-' + book.tags">{{ book.tags }}</div>
                                    </div>
                                </div>
                                <div class="row book-link">
                                    <div class="col-12">
                                        <button type="button" class="btn btn-outline-primary"
                                            @click="downloadBook(book.link)">
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// todo: import "bootstrap"

export default {
    data() {
        return {
            books: [{ "name": "Biomechanics and Motor Control of Human Movement David A. Winter", "cover": "https://s2.loli.net/2023/08/02/JPzw92tSYTeqojG.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-y4C0v.html" }, { "name": "Data Mining. Concepts and Techniques, 3rd Edition Jiawei Han, Micheline Kamber, Jian Pei", "cover": "https://s2.loli.net/2023/08/02/5WmVGwgab6xKOHL.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-V4C0v.html" }, { "name": "Designing and Managing the Supply Chain 4e David Simchi-Levi, Philip Kaminsky", "cover": "https://s2.loli.net/2023/08/02/6ZjuvyiFRGx92V1.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-j4C0v.html" }, { "name": "Engineering Economic Analysis 14e Donald G. Newnan, Ted G. Eschenbach etc.", "cover": "https://s2.loli.net/2023/08/02/fjWsi18cvAgZXl2.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-TxC0v.html" }, { "name": "Fundamentals of Biomechanics 2e Duane Knudson", "cover": "https://s2.loli.net/2023/08/02/z6Mo7KLubd3PgvB.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-vxC0v.html" }, { "name": "Introduction to Data Mining Global Edition 2e Pang-Ning Tan, Michael Steinbach, Vipin Kumar", "cover": "https://s2.loli.net/2023/08/02/TxMZSWPEbO17d5u.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-dxC0v.html" }, { "name": "Introduction to Human Factors Engineering", "cover": "https://s2.loli.net/2023/08/02/y97H6fSqazm1lJL.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-3xC0v.html" }, { "name": "Introduction to Opreation Research, 10th", "cover": "https://s2.loli.net/2023/08/02/aze54DBLFnW6C8j.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-hxC0v.html" }, { "name": "Introduction to statistical quality control 7e Douglas C. Montgomery", "cover": "https://s2.loli.net/2023/08/02/i5SbnxItDreEXKj.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-HxC0v.html" }, { "name": "Kodaks ergonomic design for people at work 2e", "cover": "https://s2.loli.net/2023/08/02/9oG2q47S3xJKdg6.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-AxC0v.html " }, { "name": "Managing Engineering and Technology (Babcock, Daniel L. Morse, Lucy C.) ", "cover": "https://s2.loli.net/2023/08/02/JxbdMK7skALFvzG.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-9xC0v.html" }, { "name": "Managing for Quality and Performance Excellence, 11e Evans, James R., Lindsay, William M", "cover": "https://s2.loli.net/2023/08/02/W2JUkiBRfDTb3M6.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-QxC0v.html" }, { "name": "Probability statistics for engineers 9e", "cover": "https://s2.loli.net/2023/08/02/1Hp3ch4dD5wVakN.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-ExC0v.html" }, { "name": "Work systems the methods, measurement and manage", "cover": "https://s2.loli.net/2023/08/02/YRzO9vNZJ2HuEV5.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-kxC0v.html" }, { "name": "Work Systems_ Pearson New Inter - Mikell P. Groover", "cover": "https://s2.loli.net/2023/08/02/5cf6HT8Gv4re9Wy.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-oxC0v.html" }, { "name": "\u6982\u7387\u8bba\u4e0e\u6570\u7406\u7edf\u8ba1 \u7b2c2\u7248", "cover": "https://s2.loli.net/2023/08/02/LOutw3EGeKUZJyo.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-mxC0v.html" }, { "name": "Kodak Ergo Design 2e", "cover": "https://s2.loli.net/2023/08/02/CNRDQEwS864ZrAn.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-xxC0v.html" }, { "name": "\u6982\u7387\u4e0e\u7edf\u8ba1(\u7b2c9\u7248)", "cover": "https://s2.loli.net/2023/08/02/dYJXMWZ8vuQIhH2.png", "tags": "IE", "link": "https://www.123pan.com/s/4GC5Vv-pxC0v.html" }, { "name": "C Programming A Modern Approach, 2nd Edition (K. N. King) ", "cover": "https://s2.loli.net/2023/08/02/2AIpns8kUMFKBZ3.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-YxC0v.html" }, { "name": "C Programming A Modern Approach, 2nd Edition", "cover": "https://s2.loli.net/2023/08/02/2AIpns8kUMFKBZ3.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-GxC0v.html" }, { "name": "C++ Primer (Stanley B. Lippman, Jos\u00e9e Lajoie etc.) ", "cover": "https://s2.loli.net/2023/08/02/R2ENVjZK3s9dzQA.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-PxC0v.html" }, { "name": "C++ Primer \u4e2d\u6587\u7248(\u539f\u4e66\u7b2c\u4e94\u7248)", "cover": "https://s2.loli.net/2023/08/02/u1H9sgBovlSxdma.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-XxC0v.html" }, { "name": "Computational Thinking for the Modern Problem Solver (Hunt, Kenny A. Riley, David D)", "cover": "https://s2.loli.net/2023/08/02/8moMhN7lQvRIHDX.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-nxC0v.html" }, { "name": "Computer Organization and Design 5th Edition 2014", "cover": "https://s2.loli.net/2023/08/02/IJKEHMwTd9Bcpg5.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-2xC0v.html" }, { "name": "Computer Organization and Design MIPS Edition The HardwareSoftware Interface,6e,(David A. Patterson, John L. Hennessy)", "cover": "https://s2.loli.net/2023/08/02/plH6YFJMNcWGa8Q.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-sxC0v.html" }, { "name": "Computer Science Illuminated Dale Nell, Lewis J", "cover": "https://s2.loli.net/2023/08/02/bTx1MjNfWRKl6n9.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-WxC0v.html" }, { "name": "C\u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c\u4e94\u7248)", "cover": "https://s2.loli.net/2023/08/02/bA2YEHpPVBLIG4n.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-CxC0v.html" }, { "name": "C\u7a0b\u5e8f\u8bbe\u8ba1\u8bed\u8a00 Kernighan, Ritchie", "cover": "https://s2.loli.net/2023/08/02/EhDzQHVSBWaOtrd.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-NxC0v.html" }, { "name": "C\u8bed\u8a00\u7a0b\u5e8f\u8bbe\u8ba1\uff1a\u73b0\u4ee3\u65b9\u6cd5\uff08\u7b2c2\u7248\uff09", "cover": "https://s2.loli.net/2023/08/02/uIcWQ8EXFZhDs4k.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-OxC0v.html" }, { "name": "Data Structures and Abstractions with Java - Fran", "cover": "https://s2.loli.net/2023/08/02/KIbAiFBGpvTkV81.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-RxC0v.html" }, { "name": "Data Structures and Abstractions with Java (Frank M. Carrano Timothy Henry) (z-lib.org)", "cover": "https://s2.loli.net/2023/08/02/KIbAiFBGpvTkV81.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-rxC0v.html" }, { "name": "Introduction to Corrosion Science_Edward McCafferty (auth.)", "cover": "https://s2.loli.net/2023/08/02/tN83lQZfEgX1H2d.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-8xC0v.html" }, { "name": "Introduction to Information Systems - Loose Leaf (George Marakas, James OBrien)", "cover": "https://s2.loli.net/2023/08/02/la64qwRoSUeQIO3.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-0xC0v.html" }, { "name": "Introduction to Probabilistic and Statistical Methods with Examples in R (Katarzyna Stapor)", "cover": "https://s2.loli.net/2023/08/02/NLJpwEhbvuxU9aj.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-uxC0v.html" }, { "name": "Introduction to the Practice of Statistics ( etc.) (z-lib.org)", "cover": "https://s2.loli.net/2023/08/02/Jp97jgzVcyE3BY6.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-KxC0v.html" }, { "name": "Introduction to the Practice of Statistics", "cover": "https://s2.loli.net/2023/08/02/Jp97jgzVcyE3BY6.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-UxC0v.html" }, { "name": "MATLAB Programming for Engineers 6th Edition", "cover": "https://s2.loli.net/2023/08/02/EKrioMwtFO8a29u.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-SxC0v.html" }, { "name": "MATLAB\u00ae Programming for Engineers by Stephen J. Chapman", "cover": "https://s2.loli.net/2023/08/02/eYPSWGFmy8hJI1Z.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-7xC0v.html" }, { "name": "matlab-programming-for-engineers-6nbsped-0357030397-9780357030394", "cover": "https://s2.loli.net/2023/08/02/CDXcMtxLzgHFuQ7.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-lxC0v.html" }, { "name": "\u8ba1\u7b97\u673a\u7ec4\u6210\u4e0e\u8bbe\u8ba1\uff1a\u786c\u4ef6\u8f6f\u4ef6\u63a5\u53e3 (David A. Patterson, John L. Hennessy) ", "cover": "https://s2.loli.net/2023/08/02/i9hUkydKA4QcHgo.png", "tags": "CS", "link": "https://www.123pan.com/s/4GC5Vv-bxC0v.html" }, { "name": "Advanced Engineering Mathematics, 10th Edition (Erwin Kreyszig, Herbert Kreyszig etc.) ", "cover": "https://s2.loli.net/2023/08/02/5uAMhoZENmBg7nD.png", "tags": "ECE", "link": "https://www.123pan.com/s/4GC5Vv-exC0v.html" }, { "name": "Digital Design With an Introduction to the Verilog HDL, VHDL, and SystemVerilog (M. Morris R. Mano, Michael D. Ciletti) ", "cover": "https://s2.loli.net/2023/08/02/IVlfTMP9ovapq1g.png", "tags": "ECE", "link": "https://www.123pan.com/s/4GC5Vv-txC0v.html" }, { "name": "Starting out with c++ From control structures through objects (Tony Gaddis)", "cover": "https://s2.loli.net/2023/08/02/1ydhwDA8jPLxVMS.png", "tags": "ECE", "link": "https://www.123pan.com/s/4GC5Vv-ixC0v.html" }, { "name": "The Analysis and Design of Linear Circuits,10e,(Roland E.Thomas Albert J.Rosa)", "cover": "https://s2.loli.net/2023/08/02/dAtuFzHxa3sg19Q.png ", "tags": "ECE", "link": "https://www.123pan.com/s/4GC5Vv-zxC0v.html" }, { "name": "Fundamentals of Modern Manufacturing, 7th", "cover": "https://s2.loli.net/2023/08/02/fqpa12M7mVnvSsD.png", "tags": "MEMS", "link": "https://www.123pan.com/s/4GC5Vv-6xC0v.html" }, { "name": "Introduction to Electric Circuits-Wiley-Richard C. Dorf, James A. Svoboda -  (2013)", "cover": "https://s2.loli.net/2023/08/02/K2lWBJbGSXRPvuy.png", "tags": "MEMS", "link": "https://www.123pan.com/s/4GC5Vv-qxC0v.html" }, { "name": "Principles of Heat and Mass Transfer", "cover": "https://s2.loli.net/2023/08/02/FgmxvurdOb2X6n9.png", "tags": "MEMS", "link": "https://www.123pan.com/s/4GC5Vv-5xC0v.html" }, { "name": "SOLIDWORKS 2020 and Engineering Graphics Randy Shih", "cover": "https://s2.loli.net/2023/08/02/XGwNEo9WvReThHu.png", "tags": "MEMS", "link": "https://www.123pan.com/s/4GC5Vv-LxC0v.html" }, { "name": "Control System Engineering_ 8th\u00a0edition_ Norman S. Nise", "cover": "https://s2.loli.net/2023/08/03/MkIyQdVft87Tpm2.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-vpC0v.html" }, { "name": "Engineering Fundamentals and Problem Solving 7th Edition by Arvid Eide", "cover": "https://s2.loli.net/2023/08/03/7FzY3gSHRIQEkch.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-dpC0v.html" }, { "name": "Engineering Graphics with SOLIDWORKS 2021 (David Planchard)", "cover": "https://s2.loli.net/2023/08/03/SFX7m2ZDw8PxCgr.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-3pC0v.html" }, { "name": "Engineering Mechanics Dynamics (James L. Meriam, L. G. Kraige, J. N. Bolton)", "cover": "https://s2.loli.net/2023/08/03/i9Ls12TgXZ4HOpK.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-hpC0v.html" }, { "name": "EngineeringGraphicswithSOLIDWORKS2021DavidPlanchardz", "cover": "https://s2.loli.net/2023/08/03/steJhrGUzx8vB6F.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-HpC0v.html" }, { "name": "Fox and McDonald\u2019s Introduction to Fluid Mechanics, 9th Ed, Pritchard", "cover": "https://s2.loli.net/2023/08/03/DhL3S8oGNXFIcze.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-ApC0v.html" }, { "name": "Fox and McDonald\u2019s Introduction to Fluid Mechanics, 10th Ed, Pritchard", "cover": "https://s2.loli.net/2023/08/03/uI5Cqo4KzgkTwjM.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-QpC0v.html " }, { "name": "Fundamentals of Engineering Thermodynamics 9th Edition", "cover": "https://s2.loli.net/2023/08/03/iRSn3kTWophDvVl.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-EpC0v.html" }, { "name": "Introduction to Fluid Mechanics 9th Edition", "cover": "https://s2.loli.net/2023/08/03/DhL3S8oGNXFIcze.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-kpC0v.html" }, { "name": "Modeling and Analysis of Dynamic Systems 3rd Edition", "cover": "https://s2.loli.net/2023/08/03/vU4c68NoeKIgqCp.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-opC0v.html " }, { "name": "Shigleys mechanical engineering design 11e Richard G. Budynas J. Keith Nisbett", "cover": "https://s2.loli.net/2023/08/03/zJwpeuCDGOkNq3o.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-mpC0v.html" }, { "name": "Statics and Mechanics of Materials An Integrated", "cover": "https://s2.loli.net/2023/08/03/SfX8WOZsAiFoxEY.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-1pC0v.html" }, { "name": "Theory and Design for Mechanical Measurements 7e Richard S. Figliola, Donald E. Beasley", "cover": "https://s2.loli.net/2023/08/03/LXxdTuPshjo7Zm3.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-4pC0v.html" }, { "name": "\u9759\u529b\u5b66-\u7ffb\u8bd1\u7248-\u539f\u4e66\u7b2c12\u7248", "cover": "https://s2.loli.net/2023/08/03/41DEVBXnClKjbaq.png", "tags": "ME", "link": "https://www.123pan.com/s/4GC5Vv-xpC0v.html" }, { "name": "Calculus Early Transcendentals Global 2e", "cover": "https://s2.loli.net/2023/08/03/RdgW2JhleT1bqfU.png", "tags": "MATH", "link": "https://www.123pan.com/s/4GC5Vv-ppC0v.html " }, { "name": "Differential Equations Arnold, David Boggess, Albert_ Polking, John C", "cover": "https://s2.loli.net/2023/08/03/ZM37LitHhTG5k8J.png", "tags": "MATH", "link": "https://www.123pan.com/s/4GC5Vv-fpC0v.html " }, { "name": "Linear Algebra A ModernIntroduction 4e David Poole", "cover": "https://s2.loli.net/2023/08/03/lniB341WFovdHJK.png", "tags": "MATH", "link": "https://www.123pan.com/s/4GC5Vv-apC0v.html" }, { "name": "\u540c\u6d4e\u7ebf\u6027\u4ee3\u6570\u7b2c\u4e94\u7248", "cover": "https://s2.loli.net/2023/08/03/9pz2KYSxCFkdQEU.png", "tags": "MATH", "link": "https://www.123pan.com/s/4GC5Vv-BpC0v.html" }],
            displayed_books: [],
            header_title: "IPUCS Library | 马罗书店",
            selected_tags: 'All',
            tags: [
                { 'name': 'All' },
                { 'name': 'MATH' },
                { 'name': 'IE' },
                { 'name': 'CS' },
                { 'name': 'ECE' },
                { 'name': 'MEMS' },
                { 'name': 'ME' }
            ]
        }
    },
    methods: {
        downloadBook(link) {
            console.log(link);
            window.open(link);
        },
        async randomBooks() {
            var books = this.books

            books[0] = books[1]
            for (let i = 0; i < books.length; i++) {
                const pivot = Math.floor(Math.random() * i)
                var tmp_book = books[pivot]
                books[pivot] = books[i]
                books[i] = tmp_book
            }

            this.books = books
        },
        changeDisplay(tag_name) {
            this.selected_tags = tag_name

            switch (tag_name) {
                case 'All':
                    this.displayed_books = this.books
                    break
                default:
                    this.displayed_books = []
                    for (let i = 0; i < this.books.length; i++) {
                        if (this.books[i].tags == tag_name) {
                            this.displayed_books.push(this.books[i])
                        }
                    }
            }
        }
    },
    mounted() {
        this.displayed_books = this.books
    }
}
</script>

