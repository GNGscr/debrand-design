<?php

function renderHeaderTabs($tabType) {
  echo '<div class="headerTabs">
    <div class="headerTabs__heading">
      <div class="headerTabs__title">
	    <div id="title__tabs__wrapper">';
        if ($tabType === 'jobs') {
          echo '<div class="headerTabs__titleText" data-type="jobs">פורטל תעסוקה</div>';
        } if ($tabType === 'cvthemepage') {
          echo '<div class="headerTabs__titleText" data-type="cvthemepage">פורטל תעסוקה</div>';
        } if ($tabType === 'jobguides') {
          echo '<div class="headerTabs__titleText" data-type="jobguides">פורטל תעסוקה</div>';
        } if ($tabType === 'relocationcanada') {
	      echo '<div class="headerTabs__titleText" data-type="relocationcanada">הגירה ורילוקיישן</div>';
		} if ($tabType === 'relocationus') {
	      echo '<div class="headerTabs__titleText" data-type="relocationus">הגירה ורילוקיישן</div>';
		} if ($tabType === 'relocationgeneral') {
	      echo '<div class="headerTabs__titleText" data-type="relocationgeneral">הגירה ורילוקיישן</div>';
		} if ($tabType === 'articles') {
          echo '<div class="headerTabs__titleText" data-type="articles">מידע שימושי</div>';
        } elseif ($tabType === 'webinars') {
          echo '<div class="headerTabs__titleText" data-type="webinars">מידע שימושי</div>';
        }
      '</div>
      <div class="headerTabs__cta">';
      if ($tabType === 'jobs') {
        echo '<a class="headerTabs__ctaLink" href="/suggest-job" data-type="jobs">הוספת משרה</a>';
      } if ($tabType === 'cvthemepage') {
        echo '<a class="headerTabs__ctaLink" href="/suggest-job" data-type="cvthemepage">הוספת משרה</a>';
      } if ($tabType === 'jobguides') {
        echo '<a class="headerTabs__ctaLink" href="/suggest-job" data-type="jobguides">הוספת משרה</a>';
		  
      } elseif ($tabType === 'relocation') {
		  

      } elseif ($tabType === 'articles') {

      }
      '</div>
    </div>
    <div class="headerTabs__tabs">';
  
  if ($tabType === 'jobs') {
    echo '</div>
	<div class="headerTabs__jobs" data-type="jobs">
	  <a href="/jobs?tabs">לוח משרות</a>
      <a href="/cvthemepage?tabs">קורות חיים</a>
      <a href="/jobguides?tabs">מדריכים ומידע</a>
	</div>';
  } elseif ($tabType === 'cvthemepage') {
    echo '</div>
	<div class="headerTabs__jobs" data-type="cvthemepage">
	  <a href="/jobs?tabs">לוח משרות</a>
      <a href="/cvthemepage?tabs">קורות חיים</a>
      <a href="/jobguides?tabs">מדריכים ומידע</a>
	</div>';
  } elseif ($tabType === 'jobguides') {
    echo '</div>
	<div class="headerTabs__jobs" data-type="jobguides">
	  <a href="/jobs?tabs">לוח משרות</a>
      <a href="/cvthemepage?tabs">קורות חיים</a>
      <a href="/jobguides?tabs">מדריכים ומידע</a>
	</div>';
  } elseif ($tabType === 'relocationcanada') {
    echo '<div class="headerTabs__relocation" data-type="relocationcanada">
	  <a href="/relocationcanada?tabs">
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28.574" height="14.287" viewBox="0 0 28.574 14.287">
  <image id="Flag_of_Canada.svg" width="28.574" height="14.287" xlink:href="data:image/png;base64,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"/>
</svg>


		<span>קנדה</span>
	  
	  </a>
	  <a href="/relocationus?tabs">
			<svg class="us-flag" xmlns="http://www.w3.org/2000/svg" width="29" height="15" viewBox="0 0 29 15">
			  <g id="Group_16614" data-name="Group 16614" transform="translate(-238 -144)">
				<rect id="Rectangle_5750" data-name="Rectangle 5750" width="29" height="15" transform="translate(238 144)" fill="#fff"/>
				<rect id="Rectangle_5752" data-name="Rectangle 5752" width="29" height="1" transform="translate(238 144)" fill="red"/>
				<rect id="Rectangle_5753" data-name="Rectangle 5753" width="29" height="1" transform="translate(238 146)" fill="red"/>
				<rect id="Rectangle_5754" data-name="Rectangle 5754" width="29" height="1" transform="translate(238 148)" fill="red"/>
				<rect id="Rectangle_5755" data-name="Rectangle 5755" width="29" height="1" transform="translate(238 150)" fill="red"/>
				<rect id="Rectangle_5756" data-name="Rectangle 5756" width="29" height="1" transform="translate(238 152)" fill="red"/>
				<rect id="Rectangle_5757" data-name="Rectangle 5757" width="29" height="1" transform="translate(238 154)" fill="red"/>
				<rect id="Rectangle_5758" data-name="Rectangle 5758" width="29" height="1" transform="translate(238 156)" fill="red"/>
				<rect id="Rectangle_5759" data-name="Rectangle 5759" width="29" height="1" transform="translate(238 158)" fill="red"/>
				<rect id="Rectangle_5751" data-name="Rectangle 5751" width="12" height="7" transform="translate(238 144)" fill="#053291"/>
				<rect id="Rectangle_5760" data-name="Rectangle 5760" width="1" height="1" transform="translate(239 145)" fill="#fff"/>
				<rect id="Rectangle_5770" data-name="Rectangle 5770" width="1" height="1" transform="translate(239 149)" fill="#fff"/>
				<rect id="Rectangle_5761" data-name="Rectangle 5761" width="1" height="1" transform="translate(241 145)" fill="#fff"/>
				<rect id="Rectangle_5771" data-name="Rectangle 5771" width="1" height="1" transform="translate(241 149)" fill="#fff"/>
				<rect id="Rectangle_5762" data-name="Rectangle 5762" width="1" height="1" transform="translate(243 145)" fill="#fff"/>
				<rect id="Rectangle_5772" data-name="Rectangle 5772" width="1" height="1" transform="translate(243 149)" fill="#fff"/>
				<rect id="Rectangle_5763" data-name="Rectangle 5763" width="1" height="1" transform="translate(245 145)" fill="#fff"/>
				<rect id="Rectangle_5773" data-name="Rectangle 5773" width="1" height="1" transform="translate(245 149)" fill="#fff"/>
				<rect id="Rectangle_5764" data-name="Rectangle 5764" width="1" height="1" transform="translate(247 145)" fill="#fff"/>
				<rect id="Rectangle_5774" data-name="Rectangle 5774" width="1" height="1" transform="translate(247 149)" fill="#fff"/>
				<rect id="Rectangle_5765" data-name="Rectangle 5765" width="1" height="1" transform="translate(248 147)" fill="#fff"/>
				<rect id="Rectangle_5766" data-name="Rectangle 5766" width="1" height="1" transform="translate(246 147)" fill="#fff"/>
				<rect id="Rectangle_5767" data-name="Rectangle 5767" width="1" height="1" transform="translate(244 147)" fill="#fff"/>
				<rect id="Rectangle_5768" data-name="Rectangle 5768" width="1" height="1" transform="translate(242 147)" fill="#fff"/>
				<rect id="Rectangle_5769" data-name="Rectangle 5769" width="1" height="1" transform="translate(240 147)" fill="#fff"/>
			  </g>
			</svg>


	  	<span>ארה״ב</span>
	  </a>
	  <a href="/relocationgeneral?tabs">כללי</a>
	</div>';
  } elseif ($tabType === 'relocationus') {
    echo '<div class="headerTabs__relocation" data-type="relocationus">
	  <a href="/relocationcanada?tabs">
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28.574" height="14.287" viewBox="0 0 28.574 14.287">
  <image id="Flag_of_Canada.svg" width="28.574" height="14.287" xlink:href="data:image/png;base64,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"/>
</svg>


		<span>קנדה</span>
	  
	  </a>
	  <a href="/relocationus?tabs">
			<svg class="us-flag" xmlns="http://www.w3.org/2000/svg" width="29" height="15" viewBox="0 0 29 15">
			  <g id="Group_16614" data-name="Group 16614" transform="translate(-238 -144)">
				<rect id="Rectangle_5750" data-name="Rectangle 5750" width="29" height="15" transform="translate(238 144)" fill="#fff"/>
				<rect id="Rectangle_5752" data-name="Rectangle 5752" width="29" height="1" transform="translate(238 144)" fill="red"/>
				<rect id="Rectangle_5753" data-name="Rectangle 5753" width="29" height="1" transform="translate(238 146)" fill="red"/>
				<rect id="Rectangle_5754" data-name="Rectangle 5754" width="29" height="1" transform="translate(238 148)" fill="red"/>
				<rect id="Rectangle_5755" data-name="Rectangle 5755" width="29" height="1" transform="translate(238 150)" fill="red"/>
				<rect id="Rectangle_5756" data-name="Rectangle 5756" width="29" height="1" transform="translate(238 152)" fill="red"/>
				<rect id="Rectangle_5757" data-name="Rectangle 5757" width="29" height="1" transform="translate(238 154)" fill="red"/>
				<rect id="Rectangle_5758" data-name="Rectangle 5758" width="29" height="1" transform="translate(238 156)" fill="red"/>
				<rect id="Rectangle_5759" data-name="Rectangle 5759" width="29" height="1" transform="translate(238 158)" fill="red"/>
				<rect id="Rectangle_5751" data-name="Rectangle 5751" width="12" height="7" transform="translate(238 144)" fill="#053291"/>
				<rect id="Rectangle_5760" data-name="Rectangle 5760" width="1" height="1" transform="translate(239 145)" fill="#fff"/>
				<rect id="Rectangle_5770" data-name="Rectangle 5770" width="1" height="1" transform="translate(239 149)" fill="#fff"/>
				<rect id="Rectangle_5761" data-name="Rectangle 5761" width="1" height="1" transform="translate(241 145)" fill="#fff"/>
				<rect id="Rectangle_5771" data-name="Rectangle 5771" width="1" height="1" transform="translate(241 149)" fill="#fff"/>
				<rect id="Rectangle_5762" data-name="Rectangle 5762" width="1" height="1" transform="translate(243 145)" fill="#fff"/>
				<rect id="Rectangle_5772" data-name="Rectangle 5772" width="1" height="1" transform="translate(243 149)" fill="#fff"/>
				<rect id="Rectangle_5763" data-name="Rectangle 5763" width="1" height="1" transform="translate(245 145)" fill="#fff"/>
				<rect id="Rectangle_5773" data-name="Rectangle 5773" width="1" height="1" transform="translate(245 149)" fill="#fff"/>
				<rect id="Rectangle_5764" data-name="Rectangle 5764" width="1" height="1" transform="translate(247 145)" fill="#fff"/>
				<rect id="Rectangle_5774" data-name="Rectangle 5774" width="1" height="1" transform="translate(247 149)" fill="#fff"/>
				<rect id="Rectangle_5765" data-name="Rectangle 5765" width="1" height="1" transform="translate(248 147)" fill="#fff"/>
				<rect id="Rectangle_5766" data-name="Rectangle 5766" width="1" height="1" transform="translate(246 147)" fill="#fff"/>
				<rect id="Rectangle_5767" data-name="Rectangle 5767" width="1" height="1" transform="translate(244 147)" fill="#fff"/>
				<rect id="Rectangle_5768" data-name="Rectangle 5768" width="1" height="1" transform="translate(242 147)" fill="#fff"/>
				<rect id="Rectangle_5769" data-name="Rectangle 5769" width="1" height="1" transform="translate(240 147)" fill="#fff"/>
			  </g>
			</svg>


	  	<span>ארה״ב</span>
	  </a>
	  <a href="/relocationgeneral?tabs">כללי</a>
	</div>';
  } elseif ($tabType === 'relocationgeneral') {
    echo '<div class="headerTabs__relocation" data-type="relocationgeneral">
	  <a href="/relocationcanada?tabs">
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28.574" height="14.287" viewBox="0 0 28.574 14.287">
  <image id="Flag_of_Canada.svg" width="28.574" height="14.287" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAAKACAMAAAD0LSWTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAADAFBMVEX/AAD/////4uL/Z2f/aGj/4OD/Bgb/BQX/3t7/YmL/Y2P/3Nz/BAT/AwP/2dn/Xl7/X1//2tr/19f/WVn/Wlr/1dX/AgL/0tL/VFT/VVX/09P/AQH/0ND/UFD/UVH/zc3/ysr/S0v/TEz/y8v/x8f/Rkb/R0f/xcX/wcH/QUH/QkL/w8P/v7//Pz//Ozv/urr/u7v/PDz/OTn/tbX/trb/Njb/MzP//v7/sLD/sbH/MDD/LS3//f3/rKz/ra3/Li7/Kyv/p6f/qKj//Pz/KSn/Jib/+/v/oqL/o6P/Jyf/JCT/np7/n5//+vr/IiL/Hx//+fn/mZn/mpr/ICD/Hh7/+Pj/lJT/lZX/9/f/HBz/GRn/9vb/j4//kJD/Ghr/GBj/9fX/i4v/jIz/9PT/Fhb/FBT/8vL/hob/h4f/8/P/FRX/ExP/8fH/gYH/goL/8PD/ERH/Dw//7u7/fX3/fn7/7Oz/Dg7/DAz/6ur/eXn/enr/6+v/DQ3/Cwv/6en/dHT/dXX/5+f/Cgr/CQn/5eX/b2//cHD/5ub/CAj/4+P/amr/a2v/4eH/Bwf/39//Zmb/3d3/YWH/29v/2Nj/XFz/XV3/1tb/WFj/1NT/0dH/U1P/z8//NDT/gID/Tk7/T0//kZH/ODj/W1v/IyP/qqr/zMz/ycn/SUn/Skr/jY3/vb3/d3f/vr7/7+//RUX/ISH/xMT/wMD/TU3/QED/hIT/hYX/Pj7/HR3/t7f/6Oj/uLj/ubn/Ojr/Gxv/tLT/NTX/MjL/s7P/rq7/r6//7e3/EBD/iIj/q6v/Q0P/vLz/LCz/RET/pqb/dnb/KCj/JSX/oaH/Fxf/MTH/V1f/bW3/f3//ZWX/lpb/l5f/yMj/Vlb/srL/eHj/qan/cXH/Nzf/aWn/Ly//kpL/k5P/ior/UlL/g4P/e3v/fHz/EhL/c3P/pKT/paX/mJj/bGz/nJz/nZ3/zs7/ZGT/5OT/Kir/xsb/iYn/jo7/m5v/SEj/bm7/oKD/YGD/wsL/PT3/cnK6OeVdAAAAAWJLR0QB/wIt3gAAAAd0SU1FB+YCERcGLg1JLhkAACQoSURBVHja7d15gFV13fhxjgm4gKTBKF573JcsFZIYs0lBBNSEQEVREjSVVHgELRFzBwlcEBN3JTHBfUEs0XIjFVNccqvU8snStid9yrTM7fdzQ2e5c5dzz8ycc76v19/ec8/5fOLdDNz5TqdO1CSCDuRPIAKIAIIAIoAggAggCCACCAKIAIIAIoAggAggCCACCAKIAIIAIoAggAggCCACCAKIAIIAIoAIIAggAggCiACCACKAIIAIIAggAggCiACCACKAIIAIIAggAggCiACCACKAIIAIIAggAggCiAAigCCACCAIIAIIAogAggAigCCACCAIIAIIAogAggAigCCACCAIIAIIAogAggAigCCACCAIIAKIAIIAIoAggAggCCACCAKIAIIAIoAggAggCCACCAKIAIIAIoDhWGklMxBABDBQn1rZDAQQAQxT5y5dVzEFAUQAg7Rqp06rmYIAIoAhWr1bp07d1zAHAUQAA9Tj/Ql+2hwEEAEMz5rd3p9g97VMQgARwOB85sMR9jQJAUQAQ9Or7sMR1q1tFgKIAAZmnRUz7G0WAogAhmXduhUzLKxnGgKIAAbls58M8b9MQwARwJCsX/hkiIUNzEMAEcCAbNh4ihuZhwAigOHYuNBkjJuYiAAigMHYtOkYNzMRAUQAQ7F58zluYSYCiAAG4nPN57ilmQggAhiGz7cc5BdMRQARwCBs1XKQW5uKACKAIdim2CT7mIsAIoAB6Ftskl80FwFEAPNv2+Kj7GcyAogA5t6Xio+yf73RCCACmHPbtTbLL5uNACKA+Va/fWuz/EqD6QggAphrX219mDuYjgAigHnWsGPrwxzgS0ABRADzbGCpae5kPgKIAObXoJ1LTXPwEBMSQAQwt4aWHucuJiSACGBuvwDctfQ4d/MloAAigHn1tXLz3N2MBBABzKdhw8vN8+sjTEkAEcBcGll+oHuYkgAigHk0Ys/yA91rlDkJIAKYQ3tXMtF9zEkAEcD8Gb1vJRPdb4xJCSACmDvfqGyk+5uUACKAufsCcGxlIx13gFkJIAKYMwdWOtNvmpUAIoD5ctDBlc70kPGmJYAIYK58q/KhHmpaAogA5slhh1c+1AkTzUsAEcAc+e9qpnqEeQkgApgfkyZXM9UjjzIxAUQAc+Pb1Y31OyYmgAhgXhw9pbqxHjPVzAQQAcyJY6ud63fNTAARwHw47vhq53rCiaYmgAhgLpxU/WBPNjUBRADz4JRp1Q92+qnmJoAIYA7MiDPZ75mbACKA2TdzepzJzjrN5AQQAcy80+ON9gyTE0AEMOvOnB1vtF3OMjsBRAAzbk7c2X7K7AQQAcy2zl3izrbr2aYngAhgpn0//nBXNT0BRACz7Jxu8Yfbfa75CSACmGHn1jLd88xPABHA7FqjWy3T7X6+CQogAphZF9Q23s+YoAAigFl1YV1t4627yAwFEAHMqItrne86ZiiACGBHqP1IvksKtc63cEkKHkMAIbwAXjpvdI1X+EHtA76sxlsYNv9yAQQBrNoPO12xoKYLLCwkMOEra7qFPjt3OlcAQQCr9s33nm/LWv4V4qokJnx1DTcw9+r3LnCNAIIAVu3a9x+w25zYv6Btg0IiI94k7vsfdd0HP4Z8vQCCAFbthg8DNnn+kHivvzGZEW8a790bhh7+4T+jHCWAIIDVu+mjh9y1X5xXL0pqxjfHeffrd/zo1cN9DAYEMIZPPsW3ePXqX31LUjPuW/17r9Tj41evI4AggDH86JPn7DpjYpy/QUxGtX+Ld9C8WZ+8+McCCAIYQ7/GT7rfyEFVvfjW5Ia8dVVvXL9gSeMX3yaAIIAx3N70Wft/vorX/iTJKf+0mn97vqPpa08RQBDAOMY2fdhC784Vv/TyJKd8aX2lb3vqnGbHL9wZCSAIYBwbNn/cafPGVPbKu5Id87aVveuI+cc3f+VGAggCGMu3Wz7wvkMr+mrs7mTHfE9Fb7p0eMtXfkcAQQBj+VmxR95qvfIvvDfpOW9X/j3P36zYC+8VQBDAWM4q+sx1PcqdMFW/fdJz/kpDmbe8b0b3oi/sLIAggPEcUvyp7182quTLFiQ/6AdKvuGQka3c6YRIAEEA4/l5a889eGmJVzXsmPygB5T6EvDBh1p72XIBBAGM6eTWn3z5ha2+6uG2mPTAVt9uzd6tv+oRAQQBjKlUyrrOmFT8RYMebYtJP9bKmTSHzZsdK5sCCAJY2tySDz9hftGfjvtF24x6aNHvtoc+XvJFawggCGBMDceXfvwntijyBeDgthn1FUW+BLyyzA+cHNMggCCAcfUt8/yFJ89s/pK922rWezd/pzOfLHfmdN9IAEEA43qq7ASmP31Ak1d0ntJWs56yUpM3OuDp6WVf8pQAggDG9rUKZnBn45+OO3Hnthv24JmN7mzpnhW8YncBBAGMbb2KptB34xX/fZ+92nLaX39wxfts3LeiF6wngCCAsQ2bXdEYCpvudFoUnTXw54W2HXfh5wPPiqLTdrqxsveZPUwAQQDjuzTL27k7EkAQwPh+meXtzBFAEMAa/CrL2/m1AIIA1uCZLG/nSgEEAazB6G7ZXU63MQIIAliLh7K7nK9EAggCWIse2V3OpwUQBLAm38jucvYXQBDAmtyc3eVsIYAggDWZWJfV3RQmCSAIYG12y+puHosEEASwNs9mdTdPCiAIYI0OzepulgkgCGCNfprV3WwjgCCANTouq7uZKoAggLXaN5urWRIJIAhgrX6QzdVcJoAggDWbl83VzBNAEMCafTmbq3lOAEEAa7ZSNldzmgCCANbu8Cxu5pBIAEEAa7dpFjezmQCCACbgN1nczLECCAKYgN9mcTMLBBAEMAHnZHEzqwsgCGAC6o/M3mKm1AsgCGASbs3eYraKBBAEMAnfy95inhdAEMBE/CJ7ixkqgCCAiVg3e4u5UABBABMxaFrW9jJ9iACCACbjf7K2l8sjAQQBTMbKWdvL7wQQBDAhI7O2lz0EEAQwIRtnbS8LBRAEMCGjumZrLV1HCyAIYFJeyNZato8EEAQwKd/P1lpWFUAQwMT8Pltr+YMAggAm5vPZWssiAQQBTMxhdVnaSt1hAggCmJxds7SVRyMBBAFMzmeytJWeAggCmKAXs7SVAwUQBDBBfbK0lQcFEAQwQUcVsrOUwn0CCAKYpK9nZyl7RgIIApik/8rOUl4SQBDARB2RnaX8UQBBABN1V3aWsq0AggAm6tTsLGWmAIIAJmtcVnbyeCSAIIDJuiorO7laAEEAE/anrOzkzwIIApiwr2ZlJzsIIAhgws7Oyk5WEUAQwITV/yUbK5lcL4AggEn7XDZWsmUkgCCASftrNlZykgCCACbuf7Oxkr8JIAhg4s7PxkrWEkAQwGKeWVbDixuOycJGThhUwyMeeqUAQm4D+MPCyzW8+o4sbGTrGh5w98K5Agh5DeDU2Z3qBsZ/+RlZ2Mgr8Z9vh+6dutwugJDTAL5/pl/X+IdF/V8WNvL32I/XZ3anzJ0l6E8gAlipIfu+f8vTt4j7+n9kYSOXxH26TU54/+Vjhwkg5DKAO314z1PWj/n6EbPTv5AuI2I+3NqTP7zAbwUQchnArT+66cPjflLknvQvpH/MRztnxXGHfQUQ8hjASz6+6307x7vCaulfyKvxnuyfe358hYUCCDkM4Kqf3PZj8f6xc+/0L2SfWA923GufXGE1AYT8BfCoaY3u+4Ub4lzi9fQvZJM4zzXx0kZXmH60AELuArisyY3fcVCMSxzQPe376H5AjMcac0uTa/xLACFvARx0U9M7Xxzn8x6vpX0fA+JM5qWm19hrkABCzgL4s+a3/sOG6i9ybtr3cV71z1T//eYXuVcAIWcBbHmc6enVX+SatO/j39U/0/MtLrKlAEK+Atir0PLmv131Va5P+z6+UPUj/bnIVdYWQMhVAFcudvcHVnuVSYV0r6NQ9T9u/6HYZX4ngJCnAN5Q9Cy/whvVXmd4utdxRbXPM7Su2GWmHSWAkKMA/rv47XdfUOV11kn3OnpX+TjbdSt+nW8IIOQngPWDW7n/LrdVd6Efp3sd36ruaa6d1dpXkg0CCLkJ4F2tPsC0RVVdqF+611Fdzq9s/Yz/bQUQchPA/7T+BPdXdYDeieleR1U/4rzuhNYvdJUAQl4CeE5diUc4eI1qLjU2zdu4s5onObvUoxTmCiC0ewA3GN0Wf0xmlHyGK2ZWcamN0ryNjap4kJlXlLzUjLbYw+gNBBABLOHGbgN6zF+Y8F/BH3Zk6Yd46L7Kr/WdNG/j6So+0bh96UsdPzHhzZ49dEbf2ZsKIAJYwssfXPWYvjOGnp3cRcse4/elwyq+1r1p3sZ2FT/GAX3LXWuf5OY/c+m8xX/54KIjBRABLOH2Tw6cGrt43tL7ErnoQ2UfY8uKv/PunOZtnFnpU4z4T9lr7VyfyBffi+b3GPDxNetOEUAEsJStml5/eI/5i0bVeMk+FTzHZUMqvdoh6V3GhEqfYVDvCq72YI1jH9Jr6Iz+Tf/16Rb/CIIAlvT7lu/Rtf+Mob1q+HrkB5U8yHmVvsHy9C7jxko/Fv5qJVe7rLZvepdPa3nJPwggAljSP1s5buDIvtctPTHWFTtXdozzUxVe7pH0LuO6Ch/hpIquVrdKrHFPXLRs8cHFr1hYSQARwNIuL/FuYxcvWzSm2gueVOGj/LGyyw1M7zJ2quwJjqjwcidXO+lhvUb2GFDivJwv+hwgAljGgWXesdrPyYyZUOmzVHaY6BrpXcaaFT3APpVebnI1vzblg0+5lLngNwUQASzjrEqO3Hv/czIVfoe2R8XPUvhaJddrOD6tuzimov9b+FtdxRes8LCw9z/lUtH/y5wtgAhgOfdU+t77vrTs+vFlL/dC5Q/TdWkl99c3rbvoW8ndL+1a+QVfKHu18dcve2nfSi93jx+FQwDLqu7EqXKfk9mumotNv7mC+3szrbuo5KfXNj+hmis+V+5TLlX9mtBvCSACWNbcqm9i+tbPD2zl26uJu1V1pSkLy9/f7mndxe7l733hlKquOLiVn4c7e+DzW0+v+v7mCiACmMQPbhRz+NXz+h3d/FKjr6r2KmuVvb2L0rqLi8re+lqHV3nJDVv8hMzR/eZdfXis23soEkAEsLyn49/Obj33f73Rn9nV76j6CkvK/jjZsFnpXMWssr/p/cwl1f+9YqN/ahr9+v49d4t/f08LIAJYgbVru6Wu/U9/6/yGKBqywRnTYrx8cNmPW9+dzlXcXe6+Txwc46rTXtl4UBQ1nP/W6f271nZ/awsgAliJwbXf16zhw6fFfOkTk8rc3px0rmJOmdue9ETMC08bPjyBL3oHRwKIAFbi2I59psvLfAD41+lcxctlPhB+a8fe3ncFEAGsyMIOfqgbS58/c2U6V1H6tOVhG3bw7a0vgAhgZTr614+/NKjU3Y3umsZNdCt5pGHDBR18e3vWCyACWJm/dvRjvV3yj+tX0riJHUsegPWpjr69kyIBRAAr83qHP9expW7v02ncxNul7vg3HX57mwggAlih+iUd/mD/KnF7+6dxE/NTfcN31gsgAlipVzr8wQojW7+7LdK4iXdav9+3Ch1+d09FAogAVuoLHf9kda0fLzqxLn2LKLT+ayx/1q3jb+9mAUQAK9YwruMfrWu/Vm/vsfQtovXPGfeZ3fF39/ggAUQAK5eGn7aY1up3lU+mbxEXtHavmxyTgrv7VCSACGDlfpqGhzvyH63c3bL0LaK1f7RZ+y9puLttBBABrMKwVPy5PXxuivNcUWJW3y8NNzd5hAAigNV4OxWP18rhWEenbxHHFb3Rf96Uipv7fiSACGA1lqbj+V4rHpYladvDkqK3edxr6bi7pQKIAFZl1JR0POD2NxS7uy3Ttoflxe5y/KXpuLnjRwsgAlidnil5ws8V+9O7Ttr28GyxQxs+l5Kb6xkJIAJYnR3S8oiXDWl5c/9J2x6uanmPQy5Ly83tIIAIYJUOOCEtz3huy184fmfa9rBvy5+nXjUt9zbtIAFEAKt1cWoe8s3mt7Ze+hbR4lfCpefXF18cCSACWK2H0/OUzX+h2arpW8RqzW7x6fTc2sMCiABWbXyKfv3k/k3ubPMUHobQfZO0ntg1a7wAIoDVW5yexyy80ei+zt4vjZsY2+g3+EZvFNJzY4sjAUQAq/dWip6z8N2Pf5rrwcfTuYpx13/8GcrfpKh/nd4SQAQwhqNS9cuHdt3j/R8KGXbtOoW07qKwzrXD3rvFqS8PTtNddT1KABHAODZLWWBu6v/QtHSvY9pD/W9KWaA3iwQQAYxjD/PNvjcEEAGM5bhuBpx13U8UQAQwns8ZcNZtGQkgAhjP3gacdfsIIAIY0yl1JpxtdacKIAIY1x0mnG1bRwKIAMZ1jQln278FEAGMbaWCEWdZobMAIoDxXWrEWXZ3JIAIYHyHGnGWLRNABLAGaxpxls0VQASwFjuacXa9EAkgAliL/zbj7DpCABHAmlxoxtnVSwARwNrsbMhZtWskgAhgbf5kyFn1ZwFEAGv0D0POqksEEAGs1RWmnE03RQKIANbqZFPOpkcEEAGs2TOmnE1XCiACWLP6vYw5i/atF0AEsHZvGnMWzYgEEAGs3RbGnEXvCCACmICG/cw5ex4fJIAIYBJWNufs+V0kgAhgEvqYc/Y8KIAIYCKGHG7QWTNhiAAigMlY1aCzZrVIABHAZGxr0FnTTwARwIQMm2zS2XLkCAFEAJNyrklny3mRACKASbnXpLNlOwFEABMz+nijzpJjxgggApic3kadJc9GAogAJmcno86SnQQQAUzQ0QWzzo7CfQKIACZpuFlnx26RACKASbrHrLPjbgFEABP1qFlnx2sCiAAmaVQXs86OWSMEEAFM0HNGnSX9BBABTNBmRp0lVwkgAuhH4YK1VAARwKSse79JZ8vkXgKIACZ0HKD+Za+AtwkgApiAi14y5ix66SIBRABrtGixH4LLqr5LBRABjK9+6R1GnGX3DB0kgAhgvIPwhw4w4Kzbbf5oAUQAq3bQ/L2MNw/GzZskgAhgVY6bN8Fw82LKjJkCiABWrPOME4w2T2b3WFMAEcDKPvbco6vB5k3d4oUCiAD63Euw2uJTMaZKngJYv3RrM82v/kMbBBAB9LmXUO02f5QAIoA+9xKqcfMmCiAC2MykZT73EogjrztaABHAxub53EtATpgngAhgI6s/ZJbh2HUtAUQAGzvMoVfB2HCSb4ERwGafgFlWZ5whKFzX4B9BEMAW7jrSPPPvmK/6GAwCWMxcv/08965Y1+cAEcDi7tvURPNtq6l+EgQBbM2g64w0z+YM8aNwCGAJA6cZal7N3t1hCAhgaZd83VTz6c4rnQaDAJY9DPoWY82jO05xHiACWN6QN801f+aMcCAqAliRkV1MNl+6LXMkPgJY8bHQ44w2Tw653i9FQgAr98+7zTY/tj/Lb4VDAKsx+tOGmxcXHOD3AiOA1f5FYDfjzYPuy+r9YnQEsGo/mWy+2Tflubb834j5ktsARucMMOCsG7xWJIAIoFNSg5Tg2acCSGgBdEpqtiV69qkAElwAo2ipU1IzK9mzTwWQAAMYzd3VlLMp4bNPBZAQAxjdd6MxZ9GtUyMBRACdkhqkOcMiAUQAk/CwU1IzZvbX2ud/GSZNAAGM/uGU1Ey585lIABFAp6QGqU3OPhVAwg1gNOQpw86KX46IBBABdEpqiNrq7FMBJOgARoseN+/0O+TaSAARwDZwmlNSU++FsyIBRADb5pTUHiaebk8eEAkgAthW5nc38/QqzKuPBBABdEpqiKZ8ud3/52DohBVAp6Sm1uDzIwFEANvYYf9l7Gl09aRIABHANueU1BRq+7NPBRAB/OiU1Ckmny7HPNAx/0sweQIMYLT2cKNPkyULIwFEANuNU1LT5NYTIwFEANuRU1LTo33OPhVABLDxKanTjT8N2uvsUwFEAJuckrqX+Xe8sc9EAogAdoCpW1lAR/vizEgAEcAOMeJVG+hY546OBBAB7Cgju9pBx2nXs08FEAFs4fNOSe0wE66NBBAB7FBOSe0o7Xz2qQAigE5JTY32PvtUABFAp6SmRPuffSqACGBxt022ifZ1/Hbp2LxNIIBOSW1vj50fCSCkJYDR+M/aRfu56oZIACE9AXRKajv+9V/HnH0qgAhgCc85JbVdnPBAipZuHQjgR5yS2h467OxTAUQAS7pvuYW0tY47+1QAEcDSnJLa1jrw7FMBRADL+ZtTUtvQ7L+nbd92ggA2tr5TUtvM2E0iAYQ0B9ApqW2mg88+FUAEsAKjnJLaJs4dEwkgpD2ATkltCx1/9qkAIoCVcUpq0iY8GAkgZCOA0WmXWk2SdlwlEkDISgCj0efZTXKePSgSQMhOAKP6ZU5JTUjhuvpIACFLAYyi2+63niSk5exTAUQAq7Hma/ZTu8d6RQII2QugU1ITkJ6zTwUQAaz2LwKdklrjX/81RAII2QxgFC04wY7im7VL2vdrRwhgKRfdZElxpevsUwFEAKt39M9tKZ53T4wEELIdwGiIU1JjSdvZpwKIAMbyv05Jrdrs/8vEai0KASzLKanVSuHZpwKIAMY083KrqsY9Z0YCCHkJYDRqNbuq3A/HRAII+QmgU1Irl9KzTwUQAazBOwdbVyXSevapACKAtVipv32Vl9qzTwUQAayJU1LL631QJICQxwA6HKGcNJ99KoAIYK36OSW1hOPvzdo+7QwBrIZTUluX7rNPBRABrN34y2ytuP/cEAkg5DuAUf2ygr0V++u/QZEAQt4DGEW/dUpqC7OGZnKVFocAVs0pqc3tu3EkgBBGAJ2S2sy7t0cCCKEE0CmpTWTi7FMBRACT45TUFTJy9qkAIoAJWn+J9b1vv00iAYTQAhid6pTUThk6+1QAEcBEjVrVAnuOiQQQQgygU1K7L8v4Av0JRABrsEXQp6RO6BMJIIQbwKBPSc3W2acCiAAm76B1Qt3d4omRAELYAQz1lNTCdQ2RAELoAYyiHWaHt7jZO+Ridf4EIoA1WxDcAVmFfPRPABHABAT3gcBfRgIIAvih07qFtbauMwUQBHCFzcJa21WRAIIArvDHsNb2LQEEAfzYW2GtbRcBBAH82C8EUADBt8BB+LEAggB+7Maw1raZAIIArnBfYD8L0uVoAQQB/MivQtvbrwUQBPAjXwxtb3cIIAjgh1YP7meBO60hgCCAH5gX3uLmCSAI4AcGh7e43eoFEATwPa+HuLlNBBAE8D2/C3FzpwsgCGAUjTgkxM39ZZQAggBG94a5uu0EEAQwujjM1a0jgCCAk6aHubpZNwggBB/AkaHubg8BhOAD2DfU3b0rgBB6ADsXQt1dYRUBhMAD+Mdwl/cjAYTAA/houMt7TAAh7ABeGfL2NhBACDqAT4W8vTcFEEIO4JDHQ97e4cMEEAIO4NKw13eXAELAAXw27PU9KYAQbgDb7cfgur325NNvLNjn5He7lfyv3j15nwVvPP3ka93a6bamTxJACDaAf2+HES256pFdLhmx4h2nvjiutf9w3IHHrfivRlyyyyNXLWmHm/u7AEKwAbylTYdz5NYr7/POUc3fc/wrRX/2pPDK+Ob/5VHv7LPy1ke26S3eIoAQagDPrGujsXTdseehd3Vu7W0Hdmn5ii4DW/uvO991aM8du7bRjdadKYAQaAAPbYOJ7LnRsQ+vW+bjJdt1b/6q7l8u/Yph6z587EZ7tsHtHiqAEGgAX0t0FpO3OuPlzSdW9MY/jtehiZu/fMZWkxO96dcEEMIM4PpJTWH2E+e9eNtpVbzzoP5NL3D3oCpefNptL573xOyk7n19AYQgA/i9BAYwdvmMoQur//1CP216lT5VX2DI2Uvn9R6QwN9hPi+AEGIAh4yr6dEP2fLNPZ45LO6b79z4UgPiXuWwZ/Z4c8vafqnduCECCAEGsF/ch57e/+1rtjmltjf/TuMLHlHbtU7Z5pq3+8f+SHc/AYQAA9iz+sete+zipx9YY1ACb35t48venMAFB63xwNMXPxbje+KeAgjhBfCgY6p60sl958xfdFBi735q42vfnthlR/Qaet3i4VU92LTxAgjBBfCtSp/xhC+9uv+DU5P+C8jG79CQ8MWnPrj/q186odLne0sAIbgALi//dN0e7X3Ez1ZvaIt3b2j8PvVt8g6r/+yI3o9WcKzCcgGE0AJ4avcy3/HOGLnogLZ7+8Mav9lBbfc+w3otmLd4eMnffFd3mgBCYAH8V2uPdHz/HsuW3t7m/W38ljPb+t0mLRo5Y3mrH5d5UQAhsADuWOQ73uGL5y3o1dAubz+38Ruv0T6PPLPP/B79Z7V87gECCGEFcL2mzzF2+Xvf8Y5px/ffuPG7L2zHN37/e+LeA5p+T3yRAEJQAfzriieY0r/H/D5T2/39m3wO8Pp2f/uJC4fOWH7wivc/SQAhpAA23NmpU9cBvd/7jre+Y25gu8ZT/HIHTeG974nn9J3+3te/gwQQAgrgKscOvLBDfyfkLo2nuEtH3smwCwceu4oAQlD/CNLB9mk8xV+ZhwAigAFZ1niK/zIPAUQAA/KnxlP8s3kIIAIYkDcbT3GGeQggAhiQtxtP8fvmIYAIYEAubjzFdcxDABHAgGzaeIqbmYcAIoABubzxFL9oHgKIAAZkQOMpPmQeAogABmSvxlP8unkIIAIYkPsbT3GyeQggAhiQJkfVdzMPAUQAw3FA0zGOMREBRACDcXvTMZ5oIgKIAAbjnKZjXN1EBBABDMb6Tcf4DxMRQAQwGDc3HeMWJiKACGAwnms6xqUmIoAIYDD+1nSMD5uIACKAwXi56RhHmogAIoDBeLHpGA80EQFEAIPx7aZj/I6JCCACGIzvNR3j8yYigAhgMFZrOsZXTUQAEcBg9G46xmdNRAARwGD8p+kYrzIRAUQAg7F10zH2NREBRACD8ZWmY9zRRAQQAQzGnk3HeJOJCCACGIwJTcd4iIkIIAIYjC5Nx9jFRAQQAQzFqOZzHGEmAogABmJq8zkeZyYCiAAG4uzmc1zFTAQQAQzEes3neJGZCCACGIh3ms/x82YigAhgILZtPsd+ZiKACGAgBjaf405mIoAIYCD2aD7HN8xEABHAQFzTfI7/NhMBRAADMa/5HOeZiQAigIH4f83n+FczEUAEMBC/bD7HOWYigAhgIC5oPsfPmIkAIoCBuLr5HDc0EwFEAAPxbvM53momAogABmL75nN8wkwEEAEMxPDmc7zCTAQQAQzE4c3neLCZCCACGIhZzec43UwEEAEMw7CWgxxmKgKIAAbhvpaDPMpUBBABDMJZLQfZ2VQEEAEMwtotB7muqQggAhiEzVsO8nVTEUAEMAi3tRzkT0xFABHAICxoOcgHTEUAEcAg/L3lIL9mKgKIAAbhGy0Hub+pCCACGIQjWg7yj6YigAhgEE5uOchHTEUAEcAgfKrlIFc2FQFEAIPQs+Ugf2gqAogABmFxy0H+wFQEEAEMwlYtB3mLqQggAhiEe1oOsr+pCCACGITHWg5ysKkIIAIYhMdbDnKcqQggAhiEaS0HeYKpCCACGIJBhZaDLAwyFwFEAANwQ7FJTjIXAUQAA7BSsUmeZi4CiAAG4MJik+xlLgKIAAZgk2KTfMZcBBABDMA2xSbZx1wEEAEMwFeLTXIHcxFABDAAuxeb5FvmIoAIYAB+X2ySfzAXAUQAA/CjYpP8sbkIIAIYgOuKTfI35iKACGAATi82yTPMRQARwACcW2yS55mLACKAAbis2CQ/ay4CiAAGYMtik/y5uQggAhiAS4tN8m5zEUAEMAC7Fpvko+YigAhgAMYWm+Sd5iKACGAAjik2yePNRQARwPxrqCs2yboGkxFABDD3JhYf5XiTEUAEMPf+WXyUp5qMACKAubdW8VHONRkBRABz78rio9zAZAQQAcy9B4uP8lqTEUAEMPfuLT7K7UxGABHA3PtF8VEONRkBRABzb+/io9zHZAQQAcy9Q4uPcpnJCCACmHvfLT7KP5mMACKAufdK8VE+ZTICiADm3qeLj/JtkxFABDD3Xio+yotNRgARwNxbXnyUN5qMACKAufc/xUd5uckIIAKYezsXH+VrJiOACGDu7Vt8lEtMRgARwNw7svgo7zcZAUQAc++C3kVdYDICiACCACKAIIAIIAggAggCiACCACKACCAIIAIIAogAggAigCCACCAIIAIIAogAggAigCCACCAIIAIIAogAggAigCCACCAIIAIIAogAIoAggAggCCACCAKIAIIAIoAggAggCCACCAKIAIIAIoAggAggCCACCAKIAIIAIoAggAggCCACiACCACKAIIAIIAggAggCiACCACKAIIAIIAggAggCiACCACKAIIAIIAggAggCiACCACKAIIAIYIb9fwX3IK77wwAyAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAyLTE3VDIzOjA2OjQ2KzAwOjAwmgd5UQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMi0xN1QyMzowNjo0NiswMDowMOtawe0AAAAASUVORK5CYII="/>
</svg>


		<span>קנדה</span>
	  
	  </a>
	  <a href="/relocationus?tabs">
			<svg class="us-flag" xmlns="http://www.w3.org/2000/svg" width="29" height="15" viewBox="0 0 29 15">
			  <g id="Group_16614" data-name="Group 16614" transform="translate(-238 -144)">
				<rect id="Rectangle_5750" data-name="Rectangle 5750" width="29" height="15" transform="translate(238 144)" fill="#fff"/>
				<rect id="Rectangle_5752" data-name="Rectangle 5752" width="29" height="1" transform="translate(238 144)" fill="red"/>
				<rect id="Rectangle_5753" data-name="Rectangle 5753" width="29" height="1" transform="translate(238 146)" fill="red"/>
				<rect id="Rectangle_5754" data-name="Rectangle 5754" width="29" height="1" transform="translate(238 148)" fill="red"/>
				<rect id="Rectangle_5755" data-name="Rectangle 5755" width="29" height="1" transform="translate(238 150)" fill="red"/>
				<rect id="Rectangle_5756" data-name="Rectangle 5756" width="29" height="1" transform="translate(238 152)" fill="red"/>
				<rect id="Rectangle_5757" data-name="Rectangle 5757" width="29" height="1" transform="translate(238 154)" fill="red"/>
				<rect id="Rectangle_5758" data-name="Rectangle 5758" width="29" height="1" transform="translate(238 156)" fill="red"/>
				<rect id="Rectangle_5759" data-name="Rectangle 5759" width="29" height="1" transform="translate(238 158)" fill="red"/>
				<rect id="Rectangle_5751" data-name="Rectangle 5751" width="12" height="7" transform="translate(238 144)" fill="#053291"/>
				<rect id="Rectangle_5760" data-name="Rectangle 5760" width="1" height="1" transform="translate(239 145)" fill="#fff"/>
				<rect id="Rectangle_5770" data-name="Rectangle 5770" width="1" height="1" transform="translate(239 149)" fill="#fff"/>
				<rect id="Rectangle_5761" data-name="Rectangle 5761" width="1" height="1" transform="translate(241 145)" fill="#fff"/>
				<rect id="Rectangle_5771" data-name="Rectangle 5771" width="1" height="1" transform="translate(241 149)" fill="#fff"/>
				<rect id="Rectangle_5762" data-name="Rectangle 5762" width="1" height="1" transform="translate(243 145)" fill="#fff"/>
				<rect id="Rectangle_5772" data-name="Rectangle 5772" width="1" height="1" transform="translate(243 149)" fill="#fff"/>
				<rect id="Rectangle_5763" data-name="Rectangle 5763" width="1" height="1" transform="translate(245 145)" fill="#fff"/>
				<rect id="Rectangle_5773" data-name="Rectangle 5773" width="1" height="1" transform="translate(245 149)" fill="#fff"/>
				<rect id="Rectangle_5764" data-name="Rectangle 5764" width="1" height="1" transform="translate(247 145)" fill="#fff"/>
				<rect id="Rectangle_5774" data-name="Rectangle 5774" width="1" height="1" transform="translate(247 149)" fill="#fff"/>
				<rect id="Rectangle_5765" data-name="Rectangle 5765" width="1" height="1" transform="translate(248 147)" fill="#fff"/>
				<rect id="Rectangle_5766" data-name="Rectangle 5766" width="1" height="1" transform="translate(246 147)" fill="#fff"/>
				<rect id="Rectangle_5767" data-name="Rectangle 5767" width="1" height="1" transform="translate(244 147)" fill="#fff"/>
				<rect id="Rectangle_5768" data-name="Rectangle 5768" width="1" height="1" transform="translate(242 147)" fill="#fff"/>
				<rect id="Rectangle_5769" data-name="Rectangle 5769" width="1" height="1" transform="translate(240 147)" fill="#fff"/>
			  </g>
			</svg>


	  	<span>ארה״ב</span>
	  </a>
	  <a href="/relocationgeneral?tabs">כללי</a>
	</div>';
  } elseif ($tabType === 'articles') {
    echo '<div class="headerTabs__articles" data-type="articles">
	  <a href="/articles?tabs">כתבות ומידע</a>
	  <a href="/webinars?tabs">וובינרים</a>
	 </div>';
  } elseif ($tabType === 'webinars') {
    echo '<div class="headerTabs__webinars" data-type="webinars">
	  <a href="/articles?tabs">כתבות ומידע</a>
	  <a href="/webinars?tabs">וובינרים</a>
	 </div>';
  }

  echo '</div></div>';
}

$customHeaderTabs = isset($_GET['tabs']) ? true : false;
$urlPath = $_SERVER['REQUEST_URI'];
$tabType = '';

if (strpos($urlPath, 'jobs') !== false) {
  $tabType = 'jobs';
} elseif (strpos($urlPath, 'cvthemepage') !== false) {
  $tabType = 'cvthemepage';
} elseif (strpos($urlPath, 'jobguides') !== false) {
  $tabType = 'jobguides';
} elseif (strpos($urlPath, 'relocationcanada') !== false) {
  $tabType = 'relocationcanada';
} elseif (strpos($urlPath, 'relocationus') !== false) {
  $tabType = 'relocationus';
} elseif (strpos($urlPath, 'relocationgeneral') !== false) {
  $tabType = 'relocationgeneral';
} elseif (strpos($urlPath, 'articles') !== false) {
  $tabType = 'articles';
} elseif (strpos($urlPath, 'webinars') !== false) {
  $tabType = 'webinars';
}

if ($customHeaderTabs) {
  renderHeaderTabs($tabType);
}

?>



<?php if ($customHeaderTabs == true) { ?>

	<script>
		
    document.addEventListener("DOMContentLoaded", function() {
        const headerTabsTitleTextType = document.querySelector(".headerTabs__titleText").dataset.type;
        const titleTabsWrapper = document.querySelector("#title__tabs__wrapper");

        if (headerTabsTitleTextType === "jobs"
			|| headerTabsTitleTextType === "cvthemepage" 
			|| headerTabsTitleTextType === "jobguides") {
            titleTabsWrapper.classList.add('headerTabs__title__jobs__layout');
        } else {
            titleTabsWrapper.classList.add('headerTabs__title__layout');
        }

        const setActiveTab = (selector) => {
			let currentTabs = {};
			let titleTabsWrapperSecondChild = titleTabsWrapper.children[1];
			if (headerTabsTitleTextType === 'jobs'
				|| headerTabsTitleTextType === 'cvthemepage'
				|| headerTabsTitleTextType === 'jobguides') {
			  currentTabs = document.querySelector(".headerTabs__title").children[1];
		    } else {
				currentTabs = document.querySelector(".headerTabs__title").children[0].children[1];
		    }
			let newcurrentTab = Array.from(currentTabs.children).find(tab => tab.href.includes(currentTabs.dataset.type));
            if (newcurrentTab) {
                newcurrentTab.setAttribute("active", "true");
            }
            const tabs = document.querySelectorAll(selector + ' > a');
            Array.from(tabs).forEach((tab) => {
                tab.addEventListener("click", (e) => {
                    tabs.forEach((t) => t.setAttribute("active", "false")); // Reset all tabs
                    tab.setAttribute("active", "true"); // Set the clicked tab as active until paging
                });
            });
        };

        if (headerTabsTitleTextType === "jobs") {
            setActiveTab(".headerTabs__jobs");
        } else if (headerTabsTitleTextType === "cvthemepage") {
            setActiveTab(".headerTabs__articles");
        } else if (headerTabsTitleTextType === "jobguides") {
            setActiveTab(".headerTabs__articles");
        } else if (headerTabsTitleTextType === "articles") {
            setActiveTab(".headerTabs__articles");
        } else if (headerTabsTitleTextType === "webinars") {
            setActiveTab(".headerTabs__articles");
        } else if (headerTabsTitleTextType === "relocationcanada") {
            setActiveTab(".headerTabs__relocation");
        } else if (headerTabsTitleTextType === "relocationus") {
            setActiveTab(".headerTabs__relocation");
        } else if (headerTabsTitleTextType === "relocationgeneral") {
            setActiveTab(".headerTabs__relocation");
        }
    });
</script>


	<style>
		
		.headerTabs, .headerTabs__title, .headerTabs__articles, .headerTabs__jobs,
		.headerTabs__relocation, a, .headerTabs__title__jobs__layout,
		.headerTabs__title__layout, .headerTabs__webinars {
			display: flex;
		}
	
		.headerTabs {
			font-family: 'Assistant';
		}
		
		.headerTabs__title {
			flex-direction: column;
			margin-top: 15px;
			gap: 40px;
		}
		
		.headerTabs__titleText {
			font-size: 28px;
			color: #48A8D3;
		}
		
		.headerTabs__articles,
		.headerTabs__jobs {
			gap: 25px;
		}
		
		.headerTabs__relocation {
			gap: 35px;
		}
	
		.headerTabs__articles > a,
		.headerTabs__jobs > a {
			font-size: 16px;
			font-weight: 500;
			gap: 5px;
		}
		
		.headerTabs__relocation > a {
			font-size: 16px;
			font-weight: 500;
			align-items: center;
			gap: 12px;
		}
	
		a {
			transition: 500ms ease;
		}
		
		a:hover:not(a.headerTabs__ctaLink),
		a[active="true"] {
			font-weight: 600;
		}
		
		a.headerTabs__ctaLink {
			padding: 3px 16px; /* reduce 2px for each axis due to 2px border */
			background: #69e2f4;
			border-radius: 30px;
			transition: 0.3s;
			font-weight: 400;
			border: 2px solid transparent;
			font-size: 15px;
			width: fit-content;
		}
		
		a.headerTabs__ctaLink:hover,
		a.headerTabs__ctaLink:focus {
			border: 2px solid #053291;
			background: transparent;
		}
		
		.headerTabs__title__jobs__layout {
			justify-content: space-between;
			align-items: center;
			width: 1080px;
		}
		
		.headerTabs__title__layout {
			flex-direction: column;
			gap: 40px;
			padding-bottom: 16px;
		}
		
		.headerTabs__webinars {
			gap: 25px;
			font-size: 16px;
    		font-weight: 500;
		}
		
		.us-flag {
			scale: 0.85;
		}
	
		
		
		@media (max-width: 991px) {
		
		  .headerTabs__title__jobs__layout {
			width: calc(100vw - 30px);
		  }
		}
	
		
		@media (max-width: 767px) {
		
		  .headerTabs__title__jobs__layout {
			width: calc(100vw - 30px);
		  }
		
		  .headerTabs__jobs {
			padding-bottom: 10px;
		  }
		
		  a.headerTabs__ctaLink {
			font-size: 13px !important;
			padding: 3px 9px;
		  }
		
		}
	
	</style>

<?php } ?>