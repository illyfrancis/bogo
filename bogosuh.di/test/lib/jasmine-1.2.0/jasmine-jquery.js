  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jasmine-jquery/lib/jasmine-jquery.js at master · velesin/jasmine-jquery</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="2hs5jYUW5Tj9ZgbBidDluqCjiOug4vxURy+X0JxuHJs=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-a4149b5a83dd443b416bc3f8f7d3487f943ae92a.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-bba4ff2e37d3e3dd695a12c88cc5bda8fb5a69be.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-974473a941a983b46f11833dc8ffba8414698ff7.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/assets/github-6c7d759d3c263d4ee982c70fa09635ffecf572dd.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/velesin/jasmine-jquery/blob/2c076920a47f9e2fcbf462cb760cf723a747cf71/lib/jasmine-jquery.js'>
    <meta property="og:title" content="jasmine-jquery"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/velesin/jasmine-jquery"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png?1345673561"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jasmine-jquery - jQuery matchers and fixture loader for Jasmine framework"/>

    <meta name="description" content="jasmine-jquery - jQuery matchers and fixture loader for Jasmine framework" />
  <link href="https://github.com/velesin/jasmine-jquery/commits/master.atom" rel="alternate" title="Recent Commits to jasmine-jquery:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">
    <div id="wrapper">

    
    

    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo " href="https://github.com/">
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1340659561" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1340659561" />
          </a>

            <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
              <span class="mail-status all-read"></span>
            </a>

              
    <div class="topsearch command-bar-activated">
      <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search" class="advanced-search tooltipped downwards command-bar-search" id="advanced_search" title="Advanced Search"><span class="mini-icon mini-icon-advanced-search "></span></a>
  <input type="text" name="q" id="command-bar" placeholder="Search or Type a Command" tabindex="1" />
  <span class="mini-icon help tooltipped downwards" title="Show Command Bar Help"></span>
  <input type="hidden" name="type" value="Everything" />
  <input type="hidden" name="repo" value="" />
  <input type="hidden" name="langOverride" value="" />
  <input type="hidden" name="start_value" value="1" />
</form>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            

  
  <div id="userbox">
    <div id="user">
      <a href="https://github.com/illyfrancis"><img height="20" src="https://secure.gravatar.com/avatar/0826fffaefa12054fcbfde13de99c135?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
      <a href="https://github.com/illyfrancis" class="name">illyfrancis</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon mini-icon-create"></span></a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account Settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign Out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


                  <ul class="pagehead-actions">

          <li class="subscription">
              <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="2hs5jYUW5Tj9ZgbBidDluqCjiOug4vxURy+X0JxuHJs=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="610547" />
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-watching"></span>Watch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_included" name="do" type="radio" value="included" />
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_subscribed" name="do" type="radio" value="subscribed" />
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore" />
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container ">
            <a href="/velesin/jasmine-jquery/unstar" class="minibutton js-toggler-target starred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Unstar
            </a><a href="/velesin/jasmine-jquery/star" class="minibutton js-toggler-target unstarred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Star
            </a><a class="social-count js-social-count" href="/velesin/jasmine-jquery/stargazers">729</a>
          </li>

              <li><a href="/velesin/jasmine-jquery/fork" class="minibutton js-toggler-target fork-button lighter" rel="nofollow" data-method="post"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/velesin/jasmine-jquery/network" class="social-count">99</a>
              </li>


    </ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/velesin" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">velesin</span>
                  </a></span> /
                <strong><a href="/velesin/jasmine-jquery" class="js-current-repository">jasmine-jquery</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/velesin/jasmine-jquery" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/velesin/jasmine-jquery/network" highlight="repo_network">Network</a></li>
    <li><a href="/velesin/jasmine-jquery/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/velesin/jasmine-jquery/issues" highlight="repo_issues">Issues <span class='counter'>2</span></a></li>

      <li><a href="/velesin/jasmine-jquery/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/velesin/jasmine-jquery/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
  <div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/velesin/jasmine-jquery/tree-list/2c076920a47f9e2fcbf462cb760cf723a747cf71"
      data-blob-url-prefix="/velesin/jasmine-jquery/blob/master">

  <div class="breadcrumb">
    <span class="bold"><a href="/velesin/jasmine-jquery">jasmine-jquery</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/velesin/jasmine-jquery/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser css-truncate" cellpadding="0" cellspacing="0">
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
      <li><a href="/velesin/jasmine-jquery/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">12</span></a></li>
      <li><a href="/velesin/jasmine-jquery/downloads" class="tabnav-tab" highlight="repo_downloads">Downloads <span class="counter ">7</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
            <div class="no-results js-not-filterable">Nothing to show</div>
              <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                <span class="mini-icon mini-icon-confirm"></span>
                <h4>
                    <a href="/velesin/jasmine-jquery/blob/master/lib/jasmine-jquery.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                </h4>
              </div>
          </div>

            <div class="js-filter-tab js-filter-tags " style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.4.2/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.4.2" rel="nofollow">1.4.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.4.1/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.4.1" rel="nofollow">1.4.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.4.0/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.4.0" rel="nofollow">1.4.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.3.2/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.3.2" rel="nofollow">1.3.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.3.1/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.3.1" rel="nofollow">1.3.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.3.0/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.3.0" rel="nofollow">1.3.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.2.0/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.2.0" rel="nofollow">1.2.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.1.3/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.1.3" rel="nofollow">1.1.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.1.2/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.1.2" rel="nofollow">1.1.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.1.1/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.1.1" rel="nofollow">1.1.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.1.0/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.1.0" rel="nofollow">1.1.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/velesin/jasmine-jquery/blob/1.0.0/lib/jasmine-jquery.js" class="js-navigation-open" data-name="1.0.0" rel="nofollow">1.0.0</a>
                  </h4>
                </div>
            </div>
        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/velesin/jasmine-jquery" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/velesin/jasmine-jquery/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/velesin/jasmine-jquery/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:8882c4b9a067bbdb8e054b83ffe44483 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:8882c4b9a067bbdb8e054b83ffe44483 -->

<div id="slider">

    <div class="breadcrumb" data-path="lib/jasmine-jquery.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/velesin/jasmine-jquery" itemscope="url"><span itemprop="title">jasmine-jquery</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/velesin/jasmine-jquery/tree/master/lib" itemscope="url"><span itemprop="title">lib</span></a></span> / <strong class="final-path">jasmine-jquery.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="lib/jasmine-jquery.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      
  <div class="commit file-history-tease js-blob-contributors-content" data-path="lib/jasmine-jquery.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/3ee6c3893e75232ed43ed4e8e9a7cf39?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/travisjeffery">travisjeffery</a></span>
    <time class="js-relative-date" datetime="2012-10-01T14:00:51-07:00" title="2012-10-01 14:00:51">October 01, 2012</time>
    <div class="commit-title">
        <a href="/velesin/jasmine-jquery/commit/8903b3d4c05cc558c70b3c94adc47321920a6c11" class="message">cleanup/styling</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>24</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="travisjeffery" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=travisjeffery"><img height="20" src="https://secure.gravatar.com/avatar/3ee6c3893e75232ed43ed4e8e9a7cf39?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="velesin" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=velesin"><img height="20" src="https://secure.gravatar.com/avatar/127db1a98fec83952bac174cdd94803b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="fojas" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=fojas"><img height="20" src="https://secure.gravatar.com/avatar/875e0cf39c5ea0b0450ab4f143e72471?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jamesarosen" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=jamesarosen"><img height="20" src="https://secure.gravatar.com/avatar/2c1a10ad0cce0f73e11a2a558a69f97c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="yoshi6jp" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=yoshi6jp"><img height="20" src="https://secure.gravatar.com/avatar/6070331c1e71c111a025f4de283466da?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="justlaputa" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=justlaputa"><img height="20" src="https://secure.gravatar.com/avatar/9942bc12d01c868fc1c464e609d8a300?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="psionides" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=psionides"><img height="20" src="https://secure.gravatar.com/avatar/a8cb0cb6a2406ee9d85ea72f7c040697?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="MaxShishkin" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=MaxShishkin"><img height="20" src="https://secure.gravatar.com/avatar/7420e9b1975a3a0c7b58660a9535b784?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="marcrohloff" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=marcrohloff"><img height="20" src="https://secure.gravatar.com/avatar/c79672007d59af69a05f2b5f6929b53f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="wbotelhos" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=wbotelhos"><img height="20" src="https://secure.gravatar.com/avatar/9ba395435487e85de7df942b77a75674?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="evizitei" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=evizitei"><img height="20" src="https://secure.gravatar.com/avatar/bcd21effa8174ab2f4fd69d448e82e87?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="bunnymatic" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=bunnymatic"><img height="20" src="https://secure.gravatar.com/avatar/11d948cbd083298dea9f4f32c71f6427?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rdy" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=rdy"><img height="20" src="https://secure.gravatar.com/avatar/0fbf1502ee778cc11715219b412c38d5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="gfranko" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=gfranko"><img height="20" src="https://secure.gravatar.com/avatar/1725e8f438b376ece94ad60b9d3d00fa?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="robmcguinness" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=robmcguinness"><img height="20" src="https://secure.gravatar.com/avatar/a34bd678c21a54281816ed16990131cb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dpree" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=dpree"><img height="20" src="https://secure.gravatar.com/avatar/50456b176923c61f7bcebf45bb78891a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="milichev" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=milichev"><img height="20" src="https://secure.gravatar.com/avatar/6c777a503dad8460c1abb154b52afa6a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="diazruy" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=diazruy"><img height="20" src="https://secure.gravatar.com/avatar/fd1925c8356bb0ece18731063b25141d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="samcrang" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=samcrang"><img height="20" src="https://secure.gravatar.com/avatar/07f6797366867f81beee4a51fe11e378?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dwt" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=dwt"><img height="20" src="https://secure.gravatar.com/avatar/1beb42701eb7745571828423d564eb37?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jorgemanrubia" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=jorgemanrubia"><img height="20" src="https://secure.gravatar.com/avatar/a8b7add9e591acf027027a1d3bf18b1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sikachu" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=sikachu"><img height="20" src="https://secure.gravatar.com/avatar/f1c4a3bb1606cc4a61711e61e2fe6146?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Sequoia" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=Sequoia"><img height="20" src="https://secure.gravatar.com/avatar/2cd3c6586f719bc64a324e8bf2d74333?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jandudulski" href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js?author=jandudulski"><img height="20" src="https://secure.gravatar.com/avatar/fe0ce83e4e1683c3aeda7cb2160e06a1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/3ee6c3893e75232ed43ed4e8e9a7cf39?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/travisjeffery">travisjeffery</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/127db1a98fec83952bac174cdd94803b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/velesin">velesin</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/875e0cf39c5ea0b0450ab4f143e72471?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/fojas">fojas</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2c1a10ad0cce0f73e11a2a558a69f97c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jamesarosen">jamesarosen</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/6070331c1e71c111a025f4de283466da?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/yoshi6jp">yoshi6jp</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/9942bc12d01c868fc1c464e609d8a300?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/justlaputa">justlaputa</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a8cb0cb6a2406ee9d85ea72f7c040697?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/psionides">psionides</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/7420e9b1975a3a0c7b58660a9535b784?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/MaxShishkin">MaxShishkin</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c79672007d59af69a05f2b5f6929b53f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/marcrohloff">marcrohloff</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/9ba395435487e85de7df942b77a75674?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/wbotelhos">wbotelhos</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bcd21effa8174ab2f4fd69d448e82e87?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/evizitei">evizitei</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/11d948cbd083298dea9f4f32c71f6427?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/bunnymatic">bunnymatic</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0fbf1502ee778cc11715219b412c38d5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/rdy">rdy</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/1725e8f438b376ece94ad60b9d3d00fa?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/gfranko">gfranko</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a34bd678c21a54281816ed16990131cb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/robmcguinness">robmcguinness</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/50456b176923c61f7bcebf45bb78891a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/dpree">dpree</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/6c777a503dad8460c1abb154b52afa6a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/milichev">milichev</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/fd1925c8356bb0ece18731063b25141d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/diazruy">diazruy</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/07f6797366867f81beee4a51fe11e378?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/samcrang">samcrang</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/1beb42701eb7745571828423d564eb37?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/dwt">dwt</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/a8b7add9e591acf027027a1d3bf18b1a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jorgemanrubia">jorgemanrubia</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f1c4a3bb1606cc4a61711e61e2fe6146?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/sikachu">sikachu</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2cd3c6586f719bc64a324e8bf2d74333?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/Sequoia">Sequoia</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/fe0ce83e4e1683c3aeda7cb2160e06a1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jandudulski">jandudulski</a>
        </li>
      </ul>
    </div>
  </div>


    <div class="frames">
      <div class="frame frame-center" data-path="lib/jasmine-jquery.js/" data-permalink-url="/velesin/jasmine-jquery/blob/2c076920a47f9e2fcbf462cb760cf723a747cf71/lib/jasmine-jquery.js" data-title="jasmine-jquery/lib/jasmine-jquery.js at master · velesin/jasmine-jquery · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>547 lines (443 sloc)</span>
                <span>15.481 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter" href="/velesin/jasmine-jquery/edit/master/lib/jasmine-jquery.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>
                <li>
                  <a href="/velesin/jasmine-jquery/raw/master/lib/jasmine-jquery.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/velesin/jasmine-jquery/blame/master/lib/jasmine-jquery.js" class="minibutton grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/velesin/jasmine-jquery/commits/master/lib/jasmine-jquery.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
                <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="kd">var</span> <span class="nx">readFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;read&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC3'><span class="p">}</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="kd">var</span> <span class="nx">preloadFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC6'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;preload&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC7'><span class="p">}</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="kd">var</span> <span class="nx">loadFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC11'><span class="p">}</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="kd">var</span> <span class="nx">appendLoadFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;appendLoad&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC15'><span class="p">}</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="kd">var</span> <span class="nx">setFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;set&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC19'><span class="p">}</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="kd">var</span> <span class="nx">appendSetFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;appendSet&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC23'><span class="p">}</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="kd">var</span> <span class="nx">sandbox</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attributes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">sandbox</span><span class="p">(</span><span class="nx">attributes</span><span class="p">)</span></div><div class='line' id='LC27'><span class="p">}</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'><span class="kd">var</span> <span class="nx">spyOnEvent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">spyOn</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span></div><div class='line' id='LC31'><span class="p">}</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="kd">var</span> <span class="nx">preloadStyleFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC34'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getStyleFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;preload&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC35'><span class="p">}</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'><span class="kd">var</span> <span class="nx">loadStyleFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getStyleFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC39'><span class="p">}</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'><span class="kd">var</span> <span class="nx">appendLoadStyleFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getStyleFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;appendLoad&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC43'><span class="p">}</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'><span class="kd">var</span> <span class="nx">setStyleFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getStyleFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;set&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC47'><span class="p">}</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'><span class="kd">var</span> <span class="nx">appendSetStyleFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC50'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getStyleFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;appendSet&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC51'><span class="p">}</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'><span class="kd">var</span> <span class="nx">loadJSONFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">getJSONFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC55'><span class="p">}</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'><span class="kd">var</span> <span class="nx">getJSONFixture</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">getJSONFixtures</span><span class="p">().</span><span class="nx">proxyCallTo_</span><span class="p">(</span><span class="s1">&#39;read&#39;</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)[</span><span class="nx">url</span><span class="p">]</span></div><div class='line' id='LC59'><span class="p">}</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">spiedEventsKey</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="nx">$</span><span class="p">(</span><span class="nx">selector</span><span class="p">).</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">].</span><span class="nx">toString</span><span class="p">()</span></div><div class='line' id='LC63'><span class="p">}</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">currentFixtures_</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">currentFixtures_</span> <span class="o">||</span> <span class="k">new</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">()</span></div><div class='line' id='LC67'><span class="p">}</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">getStyleFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">currentStyleFixtures_</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">currentStyleFixtures_</span> <span class="o">||</span> <span class="k">new</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">()</span></div><div class='line' id='LC71'><span class="p">}</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">containerId</span> <span class="o">=</span> <span class="s1">&#39;jasmine-fixtures&#39;</span></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span> <span class="o">=</span> <span class="s1">&#39;spec/javascripts/fixtures&#39;</span></div><div class='line' id='LC77'><span class="p">}</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">set</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cleanUp</span><span class="p">()</span></div><div class='line' id='LC81'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">createContainer_</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span></div><div class='line' id='LC82'><span class="p">}</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">appendSet</span><span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addToContainer_</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span></div><div class='line' id='LC86'><span class="p">}</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">preload</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC89'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">read</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC90'><span class="p">}</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">load</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC93'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cleanUp</span><span class="p">()</span></div><div class='line' id='LC94'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">createContainer_</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">read</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">))</span></div><div class='line' id='LC95'><span class="p">}</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">appendLoad</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC98'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addToContainer_</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">read</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">))</span></div><div class='line' id='LC99'><span class="p">}</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">read</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC102'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">htmlChunks</span> <span class="o">=</span> <span class="p">[]</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fixtureUrls</span> <span class="o">=</span> <span class="nx">arguments</span></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">urlCount</span> <span class="o">=</span> <span class="nx">fixtureUrls</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">urlIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">urlIndex</span> <span class="o">&lt;</span> <span class="nx">urlCount</span><span class="p">;</span> <span class="nx">urlIndex</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">htmlChunks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getFixtureHtml_</span><span class="p">(</span><span class="nx">fixtureUrls</span><span class="p">[</span><span class="nx">urlIndex</span><span class="p">]))</span></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">htmlChunks</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC110'><span class="p">}</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clearCache</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC114'><span class="p">}</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">cleanUp</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">containerId</span><span class="p">).</span><span class="nx">remove</span><span class="p">()</span></div><div class='line' id='LC118'><span class="p">}</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">sandbox</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attributes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">attributesToSet</span> <span class="o">=</span> <span class="nx">attributes</span> <span class="o">||</span> <span class="p">{}</span></div><div class='line' id='LC122'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;sandbox&quot; /&gt;&#39;</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="nx">attributesToSet</span><span class="p">)</span></div><div class='line' id='LC123'><span class="p">}</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">createContainer_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC126'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">container</span></div><div class='line' id='LC127'>&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">html</span> <span class="k">instanceof</span> <span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">containerId</span> <span class="o">+</span> <span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span> <span class="o">=</span> <span class="s1">&#39;&lt;div id=&quot;&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">containerId</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">html</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span></div><div class='line' id='LC132'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">container</span><span class="p">)</span></div><div class='line' id='LC134'><span class="p">}</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">addToContainer_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">){</span></div><div class='line' id='LC137'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;#&#39;</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">containerId</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span></div><div class='line' id='LC138'>&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">container</span><span class="p">.</span><span class="nx">length</span><span class="p">){</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">createContainer_</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span></div><div class='line' id='LC140'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC141'><span class="p">}</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getFixtureHtml_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span><span class="p">[</span><span class="nx">url</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">loadFixtureIntoCache_</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span></div><div class='line' id='LC146'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC147'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span><span class="p">[</span><span class="nx">url</span><span class="p">]</span></div><div class='line' id='LC148'><span class="p">}</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">loadFixtureIntoCache_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">relativeUrl</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">makeFixtureUrl_</span><span class="p">(</span><span class="nx">relativeUrl</span><span class="p">)</span></div><div class='line' id='LC152'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">request</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;GET&quot;</span><span class="p">,</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nx">url</span> <span class="o">+</span> <span class="s2">&quot;?&quot;</span> <span class="o">+</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">().</span><span class="nx">getTime</span><span class="p">(),</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">async</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC156'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC157'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span><span class="p">[</span><span class="nx">relativeUrl</span><span class="p">]</span> <span class="o">=</span> <span class="nx">request</span><span class="p">.</span><span class="nx">responseText</span></div><div class='line' id='LC158'><span class="p">}</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">makeFixtureUrl_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">relativeUrl</span><span class="p">){</span></div><div class='line' id='LC161'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s1">&#39;/$&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span> <span class="o">+</span> <span class="nx">relativeUrl</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="nx">relativeUrl</span></div><div class='line' id='LC162'><span class="p">}</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">proxyCallTo_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">methodName</span><span class="p">,</span> <span class="nx">passedArguments</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC165'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="nx">methodName</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">passedArguments</span><span class="p">)</span></div><div class='line' id='LC166'><span class="p">}</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC170'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC171'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesNodes_</span> <span class="o">=</span> <span class="p">[]</span></div><div class='line' id='LC172'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span> <span class="o">=</span> <span class="s1">&#39;spec/javascripts/fixtures&#39;</span></div><div class='line' id='LC173'><span class="p">}</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">set</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">css</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC176'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cleanUp</span><span class="p">()</span></div><div class='line' id='LC177'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">createStyle_</span><span class="p">(</span><span class="nx">css</span><span class="p">)</span></div><div class='line' id='LC178'><span class="p">}</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">appendSet</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">css</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">createStyle_</span><span class="p">(</span><span class="nx">css</span><span class="p">)</span></div><div class='line' id='LC182'><span class="p">}</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">preload</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC185'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">read_</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC186'><span class="p">}</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">load</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC189'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cleanUp</span><span class="p">()</span></div><div class='line' id='LC190'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">createStyle_</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">read_</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">))</span></div><div class='line' id='LC191'><span class="p">}</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">appendLoad</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC194'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">createStyle_</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">read_</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">))</span></div><div class='line' id='LC195'><span class="p">}</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">cleanUp</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC198'>&nbsp;&nbsp;<span class="k">while</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">fixturesNodes_</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesNodes_</span><span class="p">.</span><span class="nx">pop</span><span class="p">().</span><span class="nx">remove</span><span class="p">()</span></div><div class='line' id='LC200'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC201'><span class="p">}</span></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">createStyle_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC204'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">styleText</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div&gt;&lt;/div&gt;&#39;</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="nx">html</span><span class="p">).</span><span class="nx">text</span><span class="p">(),</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">style</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;style&gt;&#39;</span> <span class="o">+</span> <span class="nx">styleText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/style&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesNodes_</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">style</span><span class="p">)</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;head&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">style</span><span class="p">)</span></div><div class='line' id='LC210'><span class="p">}</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clearCache</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clearCache</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">read_</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">read</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getFixtureHtml_</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getFixtureHtml_</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">loadFixtureIntoCache_</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">loadFixtureIntoCache_</span></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">makeFixtureUrl_</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">makeFixtureUrl_</span></div><div class='line' id='LC221'><br/></div><div class='line' id='LC222'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">StyleFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">proxyCallTo_</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">Fixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">proxyCallTo_</span></div><div class='line' id='LC223'><br/></div><div class='line' id='LC224'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">getJSONFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC225'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">currentJSONFixtures_</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">currentJSONFixtures_</span> <span class="o">||</span> <span class="k">new</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JSONFixtures</span><span class="p">()</span></div><div class='line' id='LC226'><span class="p">}</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JSONFixtures</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC230'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span> <span class="o">=</span> <span class="s1">&#39;spec/javascripts/fixtures/json&#39;</span></div><div class='line' id='LC231'><span class="p">}</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JSONFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">load</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC234'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">read</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC235'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span></div><div class='line' id='LC236'><span class="p">}</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JSONFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">read</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC239'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fixtureUrls</span> <span class="o">=</span> <span class="nx">arguments</span></div><div class='line' id='LC240'>&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">urlCount</span> <span class="o">=</span> <span class="nx">fixtureUrls</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">urlIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">urlIndex</span> <span class="o">&lt;</span> <span class="nx">urlCount</span><span class="p">;</span> <span class="nx">urlIndex</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">getFixtureData_</span><span class="p">(</span><span class="nx">fixtureUrls</span><span class="p">[</span><span class="nx">urlIndex</span><span class="p">])</span></div><div class='line' id='LC242'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC243'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span></div><div class='line' id='LC244'><span class="p">}</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JSONFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clearCache</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC247'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC248'><span class="p">}</span></div><div class='line' id='LC249'><br/></div><div class='line' id='LC250'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JSONFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getFixtureData_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span>  </div><div class='line' id='LC251'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">loadFixtureIntoCache_</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span></div><div class='line' id='LC252'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesCache_</span><span class="p">[</span><span class="nx">url</span><span class="p">]</span></div><div class='line' id='LC253'><span class="p">}</span></div><div class='line' id='LC254'><br/></div><div class='line' id='LC255'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JSONFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">loadFixtureIntoCache_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">relativeUrl</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC256'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span></div><div class='line' id='LC257'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="s1">&#39;/$&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span> <span class="o">+</span> <span class="nx">relativeUrl</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">fixturesPath</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span> <span class="o">+</span> <span class="nx">relativeUrl</span></div><div class='line' id='LC258'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">async</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// must be synchronous to guarantee that no tests are run before fixture is loaded</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cache</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dataType</span><span class="o">:</span> <span class="s1">&#39;json&#39;</span><span class="p">,</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nx">url</span><span class="p">,</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">fixturesCache_</span><span class="p">[</span><span class="nx">relativeUrl</span><span class="p">]</span> <span class="o">=</span> <span class="nx">data</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">jqXHR</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">errorThrown</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;JSONFixture could not be loaded: &#39;</span> <span class="o">+</span> <span class="nx">url</span> <span class="o">+</span> <span class="s1">&#39; (status: &#39;</span> <span class="o">+</span> <span class="nx">status</span> <span class="o">+</span> <span class="s1">&#39;, message: &#39;</span> <span class="o">+</span> <span class="nx">errorThrown</span><span class="p">.</span><span class="nx">message</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">)</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC269'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC270'><span class="p">}</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JSONFixtures</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">proxyCallTo_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">methodName</span><span class="p">,</span> <span class="nx">passedArguments</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC273'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">[</span><span class="nx">methodName</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">passedArguments</span><span class="p">)</span></div><div class='line' id='LC274'><span class="p">}</span></div><div class='line' id='LC275'><br/></div><div class='line' id='LC276'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{}</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">browserTagCaseIndependentHtml</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC279'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div/&gt;&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">html</span><span class="p">).</span><span class="nx">html</span><span class="p">()</span></div><div class='line' id='LC280'><span class="p">}</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">elementToString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC283'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">domEl</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC284'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">domEl</span> <span class="o">==</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">domEl</span><span class="p">.</span><span class="nx">cloneNode</span><span class="p">)</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div /&gt;&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">clone</span><span class="p">()).</span><span class="nx">html</span><span class="p">()</span></div><div class='line' id='LC286'>&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">element</span><span class="p">.</span><span class="nx">toString</span><span class="p">()</span></div><div class='line' id='LC288'><span class="p">}</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">matchersClass</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC291'><br/></div><div class='line' id='LC292'><span class="o">!</span><span class="kd">function</span><span class="p">(</span><span class="nx">namespace</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC293'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">spiedEvents</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handlers</span><span class="o">:</span>    <span class="p">[]</span></div><div class='line' id='LC296'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>&nbsp;&nbsp;<span class="nx">namespace</span><span class="p">.</span><span class="nx">events</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">spyOn</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">handler</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">spiedEvents</span><span class="p">[</span><span class="nx">jasmine</span><span class="p">.</span><span class="nx">spiedEventsKey</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)]</span> <span class="o">=</span> <span class="nx">e</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">selector</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="nx">eventName</span><span class="p">,</span> <span class="nx">handler</span><span class="p">)</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">handlers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">handler</span><span class="p">)</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">selector</span><span class="o">:</span> <span class="nx">selector</span><span class="p">,</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">eventName</span><span class="o">:</span> <span class="nx">eventName</span><span class="p">,</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handler</span><span class="o">:</span> <span class="nx">handler</span><span class="p">,</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reset</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">data</span><span class="p">.</span><span class="nx">spiedEvents</span><span class="p">[</span><span class="nx">jasmine</span><span class="p">.</span><span class="nx">spiedEventsKey</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)]</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC314'><br/></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wasTriggered</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">spiedEvents</span><span class="p">[</span><span class="nx">jasmine</span><span class="p">.</span><span class="nx">spiedEventsKey</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)])</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC318'><br/></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wasPrevented</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">data</span><span class="p">.</span><span class="nx">spiedEvents</span><span class="p">[</span><span class="nx">jasmine</span><span class="p">.</span><span class="nx">spiedEventsKey</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)].</span><span class="nx">isDefaultPrevented</span><span class="p">()</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cleanUp</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">spiedEvents</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">handlers</span>    <span class="o">=</span> <span class="p">[]</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC327'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC328'><span class="p">}(</span><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">)</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'><span class="o">!</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC331'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">jQueryMatchers</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveClass</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">className</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">className</span><span class="p">)</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveCss</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">css</span><span class="p">){</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">prop</span> <span class="k">in</span> <span class="nx">css</span><span class="p">){</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">prop</span><span class="p">)</span> <span class="o">!==</span> <span class="nx">css</span><span class="p">[</span><span class="nx">prop</span><span class="p">])</span> <span class="k">return</span> <span class="kc">false</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeVisible</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:visible&#39;</span><span class="p">)</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeHidden</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:hidden&#39;</span><span class="p">)</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC350'><br/></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeSelected</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:selected&#39;</span><span class="p">)</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC354'><br/></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeChecked</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:checked&#39;</span><span class="p">)</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeEmpty</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:empty&#39;</span><span class="p">)</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC362'><br/></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toExist</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">).</span><span class="nx">length</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC366'><br/></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveAttr</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attributeName</span><span class="p">,</span> <span class="nx">expectedAttributeValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hasProperty</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="nx">attributeName</span><span class="p">),</span> <span class="nx">expectedAttributeValue</span><span class="p">)</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC370'><br/></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveProp</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">propertyName</span><span class="p">,</span> <span class="nx">expectedPropertyValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hasProperty</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">prop</span><span class="p">(</span><span class="nx">propertyName</span><span class="p">),</span> <span class="nx">expectedPropertyValue</span><span class="p">)</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC374'><br/></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveId</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">)</span> <span class="o">==</span> <span class="nx">id</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC378'><br/></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveHtml</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span> <span class="o">==</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">browserTagCaseIndependentHtml</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toContainHtml</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">html</span><span class="p">){</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">actualHtml</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">expectedHtml</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">browserTagCaseIndependentHtml</span><span class="p">(</span><span class="nx">html</span><span class="p">)</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">actualHtml</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">expectedHtml</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveText</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">trimmedText</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">text</span><span class="p">())</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">text</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">text</span><span class="p">.</span><span class="nx">test</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">text</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">trimmedText</span><span class="p">)</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">trimmedText</span> <span class="o">==</span> <span class="nx">text</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC397'><br/></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">==</span> <span class="nx">value</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC401'><br/></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveData</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">expectedValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hasProperty</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">key</span><span class="p">),</span> <span class="nx">expectedValue</span><span class="p">)</span></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC405'><br/></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBe</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC409'><br/></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toContain</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">selector</span><span class="p">).</span><span class="nx">length</span></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC413'><br/></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeDisabled</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">){</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:disabled&#39;</span><span class="p">)</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC417'><br/></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toBeFocused</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;:focus&#39;</span><span class="p">)</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC421'><br/></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHandle</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC423'><br/></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">events</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">_data</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">),</span> <span class="s2">&quot;events&quot;</span><span class="p">)</span></div><div class='line' id='LC425'><br/></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">events</span> <span class="o">||</span> <span class="o">!</span><span class="nx">event</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">event</span> <span class="o">!==</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC429'><br/></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">namespaces</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">)</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">eventType</span> <span class="o">=</span> <span class="nx">namespaces</span><span class="p">.</span><span class="nx">shift</span><span class="p">()</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sortedNamespaces</span> <span class="o">=</span> <span class="nx">namespaces</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">sort</span><span class="p">()</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">namespaceRegExp</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(^|\\.)&quot;</span> <span class="o">+</span> <span class="nx">sortedNamespaces</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;\\.(?:.*\\.)?&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;(\\.|$)&quot;</span><span class="p">)</span></div><div class='line' id='LC434'><br/></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">events</span><span class="p">[</span><span class="nx">eventType</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">namespaces</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">events</span><span class="p">[</span><span class="nx">eventType</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">namespace</span> <span class="o">=</span> <span class="nx">events</span><span class="p">[</span><span class="nx">eventType</span><span class="p">][</span><span class="nx">i</span><span class="p">].</span><span class="nx">namespace</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">namespaceRegExp</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">namespace</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">events</span><span class="p">[</span><span class="nx">eventType</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">events</span><span class="p">[</span><span class="nx">eventType</span><span class="p">].</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span></div><div class='line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC446'><br/></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// tests the existence of a specific event binding + handler</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHandleWith</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">eventName</span><span class="p">,</span> <span class="nx">eventHandler</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">stack</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">_data</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">),</span> <span class="s2">&quot;events&quot;</span><span class="p">)[</span><span class="nx">eventName</span><span class="p">]</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">stack</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">stack</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">handler</span> <span class="o">==</span> <span class="nx">eventHandler</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC455'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC456'><br/></div><div class='line' id='LC457'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hasProperty</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">actualValue</span><span class="p">,</span> <span class="nx">expectedValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">expectedValue</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="k">return</span> <span class="nx">actualValue</span> <span class="o">!==</span> <span class="kc">undefined</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">actualValue</span> <span class="o">==</span> <span class="nx">expectedValue</span></div><div class='line' id='LC460'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC461'><br/></div><div class='line' id='LC462'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bindMatcher</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">methodName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">builtInMatcher</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">Matchers</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">methodName</span><span class="p">]</span></div><div class='line' id='LC464'><br/></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">matchersClass</span><span class="p">[</span><span class="nx">methodName</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="k">instanceof</span> <span class="nx">$</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">||</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">isDomNode</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">)</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">jQueryMatchers</span><span class="p">[</span><span class="nx">methodName</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">element</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">get</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">element</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">get</span><span class="p">()[</span><span class="mi">0</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">isWindow</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">element</span><span class="p">.</span><span class="nx">tagName</span> <span class="o">!==</span> <span class="s2">&quot;HTML&quot;</span><span class="p">)</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="o">=</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">elementToString</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">)</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC476'><br/></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">builtInMatcher</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">builtInMatcher</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC483'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC484'><br/></div><div class='line' id='LC485'>&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">methodName</span> <span class="k">in</span> <span class="nx">jQueryMatchers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bindMatcher</span><span class="p">(</span><span class="nx">methodName</span><span class="p">)</span></div><div class='line' id='LC487'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC488'><span class="p">}()</span></div><div class='line' id='LC489'><br/></div><div class='line' id='LC490'><span class="nx">beforeEach</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC491'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addMatchers</span><span class="p">(</span><span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">matchersClass</span><span class="p">)</span></div><div class='line' id='LC492'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addMatchers</span><span class="p">({</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveBeenTriggeredOn</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected event &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="o">+</span> <span class="s2">&quot; to have been triggered on &quot;</span> <span class="o">+</span> <span class="nx">selector</span><span class="p">,</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected event &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="o">+</span> <span class="s2">&quot; not to have been triggered on &quot;</span> <span class="o">+</span> <span class="nx">selector</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">]</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">wasTriggered</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">)</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC502'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC503'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addMatchers</span><span class="p">({</span></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveBeenTriggered</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">eventName</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">eventName</span><span class="p">,</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">selector</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">selector</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected event &quot;</span> <span class="o">+</span> <span class="nx">eventName</span> <span class="o">+</span> <span class="s2">&quot; to have been triggered on &quot;</span> <span class="o">+</span> <span class="nx">selector</span><span class="p">,</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected event &quot;</span> <span class="o">+</span> <span class="nx">eventName</span> <span class="o">+</span> <span class="s2">&quot; not to have been triggered on &quot;</span> <span class="o">+</span> <span class="nx">selector</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">]</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">wasTriggered</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC515'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC516'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addMatchers</span><span class="p">({</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveBeenPreventedOn</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">selector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected event &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="o">+</span> <span class="s2">&quot; to have been prevented on &quot;</span> <span class="o">+</span> <span class="nx">selector</span><span class="p">,</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected event &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="o">+</span> <span class="s2">&quot; not to have been prevented on &quot;</span> <span class="o">+</span> <span class="nx">selector</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">]</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">wasPrevented</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">)</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC526'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC527'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">addMatchers</span><span class="p">({</span></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toHaveBeenPrevented</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">eventName</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">eventName</span><span class="p">,</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">selector</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">actual</span><span class="p">.</span><span class="nx">selector</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected event &quot;</span> <span class="o">+</span> <span class="nx">eventName</span> <span class="o">+</span> <span class="s2">&quot; to have been prevented on &quot;</span> <span class="o">+</span> <span class="nx">selector</span><span class="p">,</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;Expected event &quot;</span> <span class="o">+</span> <span class="nx">eventName</span> <span class="o">+</span> <span class="s2">&quot; not to have been prevented on &quot;</span> <span class="o">+</span> <span class="nx">selector</span></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">]</span></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">wasPrevented</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">eventName</span><span class="p">)</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC539'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC540'><span class="p">})</span></div><div class='line' id='LC541'><br/></div><div class='line' id='LC542'><span class="nx">afterEach</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC543'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getFixtures</span><span class="p">().</span><span class="nx">cleanUp</span><span class="p">()</span></div><div class='line' id='LC544'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">getStyleFixtures</span><span class="p">().</span><span class="nx">cleanUp</span><span class="p">()</span></div><div class='line' id='LC545'>&nbsp;&nbsp;<span class="nx">jasmine</span><span class="p">.</span><span class="nx">JQuery</span><span class="p">.</span><span class="nx">events</span><span class="p">.</span><span class="nx">cleanUp</span><span class="p">()</span></div><div class='line' id='LC546'><span class="p">})</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>
</div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/velesin/jasmine-jquery/tree-list/2c076920a47f9e2fcbf462cb760cf723a747cf71">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="http://training.github.com/">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.07664s from fe18.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

  </div><!-- /.site -->
</div><!-- /.lower_footer -->


      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1340659560" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1340659560" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton download">Download</a>
        </li>
      </ul>
    </div>

    
    
    <span id='server_response_time' data-time='0.07834' data-host='fe18'></span>
    
  </body>
</html>

