/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

class Downloads extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Downloads</h2>
            </header>

            <h3>SST Releases</h3>
            <table class="simple">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>File</th>
                  <th>Description</th>
                  <th>Released</th>
                  <th>Size</th>
                  <th>SHA1 Checksum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>SST Core 7.2.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-core/releases/download/v7.2.0_Final/sstcore-7.2.0.tar.gz">sstcore-7.2.0.tar.gz</a></td>
                  <td>SST Core Release Version 7.2.0</td>
                  <td>2017-DEC-11</td>
                  <td>2.4 MB</td>
                  <td>6e0d156895241c108456b633e30a7509df700335</td>
                </tr>
                <tr>
                  <td><strong>SST Elements 7.2.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-elements/releases/download/v7.2.0_Final/sstelements-7.2.0.tar.gz">sstelements-7.2.0.tar.gz</a></td>
                  <td>SST Elements Release Version 7.2.0</td>
                  <td>2017-DEC-11</td>
                  <td>1.6 MB</td>
                  <td>ef353026b961ce84616bbb69d2b6e55517bf34b3</td>
                </tr>
                <tr>
                  <td><strong>SST Macro 7.2.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-macro/releases/download/v7.2.0_Final/sstmacro-7.2.0.tar.gz">sstmacro-7.2.0.tar.gz</a></td>
                  <td>SST Macro Release Version 7.2.0</td>
                  <td>2017-DEC-11</td>
                  <td>13.9 MB</td>
                  <td>2eeec7fc5112e9597746df684b7464631881188b</td>
                </tr>
                <tr>
                  <td><strong>SST Core 7.1.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-core/releases/download/v7.1.0_Final/sstcore-7.1.0.tar.gz">sstcore-7.1.0.tar.gz</a></td>
                  <td>SST Core Release Version 7.1.0</td>
                  <td>2017-JUN-08</td>
                  <td>2.6 MB</td>
                  <td>6f58f201e705d93b885cd4291492e7eec8e2aad2</td>
                </tr>
                <tr>
                  <td><strong>SST Elements 7.1.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-elements/releases/download/v7.1.0_Final/sstelements-7.1.0.tar.gz">sstelements-7.1.0.tar.gz</a></td>
                  <td>SST Elements Release Version 7.1.0</td>
                  <td>2017-JUN-08</td>
                  <td>1.6 MB</td>
                  <td>0e83400736987b16db094e8dab7f6812840d7496</td>
                </tr>
                <tr>
                  <td><strong>SST Macro 7.1.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-macro/releases/download/v7.1.0_Final/sstmacro-7.1.0.tar.gz">sstmacro-7.1.0.tar.gz</a></td>
                  <td>SST Macro Release Version 7.1.0</td>
                  <td>2017-JUN-08</td>
                  <td>12.4 MB</td>
                  <td>030b6e924dd782833606de76c0418b31ee7a8604</td>
                </tr>
                <tr>
                  <td><strong>SST Core 7.0.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-core/releases/download/v7.0.0_Final/sstcore-7.0.0.tar.gz">sstcore-7.0.0.tar.gz</a></td>
                  <td>SST Core Release Version 7.0.0</td>
                  <td>2017-MAY-10</td>
                  <td>2.2 MB</td>
                  <td>c7f7e0578c1c1d040d5c2ef6041050afb1de2f69</td>
                </tr>
                <tr>
                  <td><strong>SST Elements 7.0.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-elements/releases/download/v7.0.0_Final/sstelements-7.0.0.tar.gz">sstelements-7.0.0.tar.gz</a></td>
                  <td>SST Elements Release Version 7.0.0</td>
                  <td>2017-MAY-10</td>
                  <td>1.5 MB</td>
                  <td>59c176a475646b7ba4808aea6c5018e0f892824d</td>
                </tr>
                <tr>
                  <td><strong>SST Macro 7.0.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-macro/releases/download/v7.0.0_Final/sstmacro-7.0.0.tar.gz">sstmacro-7.0.0.tar.gz</a></td>
                  <td>SST Macro Release Version 7.0.0</td>
                  <td>2017-MAY-10</td>
                  <td>12.8 MB</td>
                  <td>54737577bc8ca7d719757decd7f9f839d02e8aae</td>
                </tr>
                <tr>
                  <td><strong>SST Core 6.1.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-core/releases/download/v6.1.0_Final/sstcore-6.1.0.tar.gz">sstcore-6.1.0.tar.gz</a></td>
                  <td>SST Core Release Version 6.1.0</td>
                  <td>2017-JAN-09</td>
                  <td>2.1 MB</td>
                  <td>1e2fdebfb195d56d8a7270454335d96389420363</td>
                </tr>
                <tr>
                  <td><strong>SST Elements 6.1.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-elements/releases/download/v6.1.0_Final/sstelements-6.1.0.tar.gz">sstelements-6.1.0.tar.gz</a></td>
                  <td>SST Elements Release Version 6.1.0</td>
                  <td>2017-JAN-09</td>
                  <td>6.0 MB</td>
                  <td>ce5f97a4f3ca65cd8a0a0f86a14f2028804bf7a8</td>
                </tr>
                <tr>
                  <td><strong>SST Macro 6.1.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-macro/releases/download/v6.1.0_Final/sstmacro-6.1.0.tar.gz">sstmacro-6.1.0.tar.gz</a></td>
                  <td>SST Macro Release Version 6.1.0</td>
                  <td>2017-JAN-09</td>
                  <td>12.7 MB</td>
                  <td>d67751d7cde5d7cafa783e023d53f6b62c9d25c5</td>
                </tr>
                <tr>
                  <td><strong>SST Core 6.0.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-core/releases/download/v6.0.0_Final/sstcore-6.0.0.tar.gz">sstcore-6.0.0.tar.gz</a></td>
                  <td>SST Core Release Version 6.0.0</td>
                  <td>2016-JUL-18</td>
                  <td>2.1 MB</td>
                  <td>f070e72ff05e10925e6b858c4119ff81544a28e0</td>
                </tr>
                <tr>
                  <td><strong>SST Elements 6.0.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-elements/releases/download/v6.0.0_Final/sstelements-6.0.0.tar.gz">sstelements-6.0.0.tar.gz</a></td>
                  <td>SST Elements Release Version 6.0.0</td>
                  <td>2016-JUL-18</td>
                  <td>5.9 MB</td>
                  <td>cd69e4d644c44c568a6027d816d618c1c02d0b34</td>
                </tr>
                <tr>
                  <td><strong>SST Macro 6.0.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-macro/releases/download/v6.0.0_Final/sstmacro-6.0.0.tar.gz">sstmacro-6.0.0.tar.gz</a></td>
                  <td>SST Macro Release Version 6.0.0</td>
                  <td>2016-JUL-18</td>
                  <td>9.1 MB</td>
                  <td>95f580891bd4130feec60bfe0e4c19524c134797</td>
                </tr>
                <tr>
                  <td><strong>SST 5.1.0</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-downloads/releases/download/SSTReleases/sst-5.1.tar.gz">sst-5.1.tar.gz</a></td>
                  <td>SST Release Version 5.1.0</td>
                  <td>2015-SEP-14</td>
                  <td>7.0 MB</td>
                  <td>838deabb1d02c33745b8daaeedee68dbd4544567</td>
                </tr>
              </tbody>
            </table>

            <h3>SST Support Files</h3>
            <table class="simple">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>File</th>
                  <th>Description</th>
                  <th>Released</th>
                  <th>Size</th>
                  <th>SHA1 Checksum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>SST Workbench</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-downloads/releases/download/SupportFiles/sstworkbench_1_1.zip">sstworkbench_1_1.zip</a></td>
                  <td>SST Workbench Version 1.1 for use with SST 4.x, 5.x, 6.x, <br/> <strong>NOTE: SST 7.x Not supported</strong></td>
                  <td>2014-JUL-8</td>
                  <td>30.0 MB</td>
                  <td>1af677b4aaa1d6e2280c31c6c1c768186871c7e7</td>
                </tr>
              </tbody>
            </table>

            <h3>SST Tutorials</h3>
            <table class="simple">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>File</th>
                  <th>Description</th>
                  <th>Released</th>
                  <th>Size</th>
                  <th>SHA1 Checksum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>2017 Tutorial</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-downloads/releases/download/Documentation/SST-Tutorial-July2017-withExamples.zip">SST-Tutorial-July2017-withExamples.zip</a></td>
                  <td>A high-level overview of SST’s capabilities, with deep dives into building simulators, and developing new components.</td>
                  <td>2017-JUL-26</td>
                  <td>13.1 MB</td>
                  <td>fc274811ef53d27e201d9c6c8793780f9dfffe07</td>
                </tr>
                <tr>
                  <td><strong>2016 Tutorial</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-downloads/releases/download/Documentation/April16_tutorial_slides.zip">April16_tutorial_slides.zip</a></td>
                  <td>A high level overview of SST’s capabilities.</td>
                  <td>2016-APR-19</td>
                  <td>3.33 MB</td>
                  <td>f886d7052ce5038eb7c218c05d70dd715b3a24f0</td>
                </tr>
                <tr>
                  <td><strong>ISCA 2015 Tutorial</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-downloads/releases/download/Documentation/ISCA_2015_Tutorial_Slides.zip">ISCA_2015_Tutorial_Slides.zip</a></td>
                  <td>ISCA 2015 Tutorial Slides</td>
                  <td>2016-APR-7</td>
                  <td>3.1 MB</td>
                  <td>d92f4dd440b8b3b4f8d9a16ca5afcf2fad7e1481</td>
                </tr>
                <tr>
                  <td><strong>Building A Simulator</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-downloads/releases/download/Documentation/Building_a_Simulator.zip">Building_a_Simulator.zip</a></td>
                  <td>Examples and exercises for how to write Python configuration files for SST</td>
                  <td>2016-APR-19</td>
                  <td>329 KB</td>
                  <td>c6c44f14bf7daf8e37910d532edb2980c6c59ce0</td>
                </tr>
                <tr>
                  <td><strong>Building A Simulator Examples</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-downloads/releases/download/Documentation/Building_a_Simulator_Examples.zip">Building_a_Simulator_Examples.zip</a></td>
                  <td>Examples and exercises of Python configuration files for SST</td>
                  <td>2016-APR-19</td>
                  <td>25 KB</td>
                  <td>61d9d64b72780b751aaf954fd5f9b15ce60d1442</td>
                </tr>
                <tr>
                  <td><strong>Miranda Tutorial</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-downloads/releases/download/Documentation/MirandaTutorial.zip">MirandaTutorial.zip</a></td>
                  <td>Deep dive on Miranda lightweight processor element library</td>
                  <td>2016-APR-21</td>
                  <td>255 KB</td>
                  <td>f42d96bf284867cf9d92fb80eb04de5ae37b99c1</td>
                </tr>
                <tr>
                  <td><strong>Developing For SST</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-downloads/releases/download/Documentation/Developing_for_SST.zip">Developing_for_SST.zip</a></td>
                  <td>Developing for SST slides (June 2014)</td>
                  <td>2016-APR-22</td>
                  <td>571 KB</td>
                  <td>c86e6829471f00f9df62bb2aba852803490cca31</td>
                </tr>
                <tr>
                  <td><strong>Merlin Element Library Overview</strong></td>
                  <td><a href="https://github.com/sstsimulator/sst-downloads/releases/download/Documentation/April16_tutorial_slides-merlin.zip">April16_tutorial_slides-merlin.zip</a></td>
                  <td>Merlin Element Library Overview (April 2016)</td>
                  <td>2016-MAY-17</td>
                  <td>460 KB</td>
                  <td>eaa300eef0ce7d31f6a616e17dabe484dfa9effb</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Downloads;
