# cs-290-dom-events

Assignment to use JavaScript to create all of the content of the page and append it to the body of the page. That content should include:

* A 4x4 table
  - The top row should be a header row with header cells
  - The 4 header cells, from left to right should say "Header 1", "Header 2" ... "Header 4
  - The non header cells should contain their position. The upper left cell should contain the text "1, 1", the cell to its right "2, 1", the cell below it "1, 2" and so on.
* 4 directional buttons (up, down, left right)
* A button labeled "Mark Cell"

When the page is loaded the upper left, non-header cell of the table should be 'selected'. This is denoted by it having a thicker border than the other cells. If you push the directional buttons other cells should be selected instead. So if you press the right button, cell 1,1 should no longer be selected and 2,1 should be selected instead.

If you are already on the top row and hit 'up' nothing should happen (you should not be able to move into the header cells). Likewise if you are all the way right and hit right or all the way at the bottom and hit down.

Hitting the "Mark Cell" button should permanently change the background of the selected cell to yellow. This should persist even after other cells are selected or marked.
