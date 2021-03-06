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

class GettingStarted extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer gp">
          <div className="post">
            <header className="postHeader">
              <h2>Getting Started</h2>
            </header>
            <p>SST is an open source, cross platform simulation platform that provides a framework to connect multiple simulated hardware objects including CPUs, network, memory, etc. Simulations using the toolkit can be run either single node, or run on multiple nodes via MPI. The toolkit provides a parallel discrete event core as well as several programming interfaces including classes to manage random number generation, statistics handling, simulation output and efficient memory pooling for simulation events. The most recent performance evaluation has shown that SST can scale to simulate beyond 1.5M objects and operate efficiently on simulations up to 128 dual-processor nodes.</p>

            <p>This quick start guide is intended to get the user up and running with SST as quickly as possible.   It is intended for users with intermediate knowledge in the operation of  Unix/Linux/OSX environments.</p>

            <p><strong>It is strongly recommend that new users refer to the <a href="/SSTPages/SSTBuildAndInstall7dot2dot0SeriesDetailedBuildInstructions">Detailed SST Build and Install Instructions</a> when building SST for the first time.</strong></p>

            <p>The SST 7.2.x <a href="/SSTPages/SSTmicroReleaseV7dot2dot0">Release Notes</a> identify what operating systems, compiler and external component combinations have been tested and proven to work with this version of SST.</p>

            <p><strong>NOTE: Using combinations other than what is identified in the <a href="/SSTPages/SSTmicroReleaseV7dot2dot0">Release Notes</a> may cause build failures and/or unexpected results.</strong></p>

            <p>A detailed list of elements provided with the SST distribution are available at <a href="/SSTPages/SSTDeveloperElementSummaryInfo">SST Element Summary</a> and  <a href="/SSTPages/SSTElementReleaseMatrix">SST Element Release Matrix</a>.</p>

            <p>If you encounter difficulties, refer to the <a href="/SSTPages/SSTBuildAndInstall7dot2dot0SeriesDetailedBuildInstructions">Detailed SST Build and Install Instructions</a> or go to the <a href="/SSTPages/SSTMainSupport">SST Support</a> page</p>

            <h2>Introduction</h2>
            <img src="img/video.png"/>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = GettingStarted;
