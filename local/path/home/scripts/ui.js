// accessing global window or document in bitburner costs 25GB each normally. this saves RAM for early UI convenience, sorry devs pls don't fix.
const cheatyWindow = eval('window');
const cheatyDocument = eval('document');
//  bitburner devs included React and ReactDOM in global window object!
// import React, { ReactDOM } from '../lib/react';
const React = cheatyWindow.React;
const ReactDOM = cheatyWindow.ReactDOM;
const useState = React.useState;
const style = `.bb-button { background-color: rgb(51, 51, 51) }
.bb-button:hover { background-color: rgb(0, 0, 0) }
.bb-button:active { background-color: rgb(5, 61, 2) }`;
function Button({ children, onClick, disabled, margin, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement("style", null, style),
        React.createElement("button", { className: 'bb-button', onClick: onClick, style: {
                fontSize: '14px',
                padding: '6px 8px',
                color: 'rgb(0, 204, 0)',
                border: '1px solid rgb(34, 34, 34)',
                borderRadius: '0px',
                fontFamily: "JetBrainsMono, 'Courier New', monospace",
                fontWeight: 500,
                lineHeight: 1.75,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxSizing: 'border-box',
                userSelect: 'none',
                WebkitTapHighlightColor: 'transparent',
                outline: 'none',
                margin: margin || '8px 0px 0px',
                verticalAlign: 'middle',
                appearance: 'none',
                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            }, disabled: disabled }, children)));
}
export async function main(ns) {
    // const changeName = () => {
    //   return () => {
    //     setName();
    //   };
    // };
    // const changeName = React.useCallback(() => {
    //   setName((prevName) => (prevName === 'Karan' ? 'Karan2' : 'Karan'));
    // }, []);
    const clickHandler = () => {
        ns.print('Button clicked!');
    };
    while (true) {
        ns.printRaw(React.createElement(Button, { onClick: async () => {
                await clickHandler();
            } }, "tertrf"));
        await ns.sleep(5000);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NyaXB0cy91aS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsZ0pBQWdKO0FBQ2hKLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQStCLENBQUM7QUFDbEUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBaUMsQ0FBQztBQUV4RSx1RUFBdUU7QUFDdkUsa0RBQWtEO0FBQ2xELE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7QUFDakMsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztBQUN2QyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0FBRWhDLE1BQU0sS0FBSyxHQUFHOztzREFFd0MsQ0FBQztBQUV2RCxTQUFTLE1BQU0sQ0FBQyxFQUNkLFFBQVEsRUFDUixPQUFPLEVBQ1AsUUFBUSxFQUNSLE1BQU0sR0FNUDtJQUNDLE9BQU8sQ0FDTDtRQUNFLG1DQUFRLEtBQUssQ0FBUztRQUN0QixnQ0FDRSxTQUFTLEVBQUMsV0FBVyxFQUNyQixPQUFPLEVBQUUsT0FBTyxFQUNoQixLQUFLLEVBQUU7Z0JBQ0wsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixNQUFNLEVBQUUsMkJBQTJCO2dCQUNuQyxZQUFZLEVBQUUsS0FBSztnQkFDbkIsVUFBVSxFQUFFLHlDQUF5QztnQkFDckQsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixPQUFPLEVBQUUsYUFBYTtnQkFDdEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLGNBQWMsRUFBRSxRQUFRO2dCQUN4QixjQUFjLEVBQUUsTUFBTTtnQkFDdEIsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLFVBQVUsRUFBRSxNQUFNO2dCQUNsQix1QkFBdUIsRUFBRSxhQUFhO2dCQUN0QyxPQUFPLEVBQUUsTUFBTTtnQkFDZixNQUFNLEVBQUUsTUFBTSxJQUFJLGFBQWE7Z0JBQy9CLGFBQWEsRUFBRSxRQUFRO2dCQUN2QixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsVUFBVSxFQUNSLCtNQUErTTthQUNsTixFQUNELFFBQVEsRUFBRSxRQUFRLElBQ2pCLFFBQVEsQ0FDRixDQUNSLENBQ0osQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxFQUFNO0lBQy9CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxLQUFLO0lBQ0wsK0NBQStDO0lBQy9DLHdFQUF3RTtJQUN4RSxVQUFVO0lBQ1YsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUM7SUFFRixPQUFPLElBQUksRUFBRTtRQUNYLEVBQUUsQ0FBQyxRQUFRLENBQ1Qsb0JBQUMsTUFBTSxJQUNMLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDbEIsTUFBTSxZQUFZLEVBQUUsQ0FBQztZQUN2QixDQUFDLGFBRU0sQ0FDVixDQUFDO1FBQ0YsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5TIH0gZnJvbSAnQG5zJztcclxuXHJcbmludGVyZmFjZSBJTXlDb250ZW50UHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuLy8gYWNjZXNzaW5nIGdsb2JhbCB3aW5kb3cgb3IgZG9jdW1lbnQgaW4gYml0YnVybmVyIGNvc3RzIDI1R0IgZWFjaCBub3JtYWxseS4gdGhpcyBzYXZlcyBSQU0gZm9yIGVhcmx5IFVJIGNvbnZlbmllbmNlLCBzb3JyeSBkZXZzIHBscyBkb24ndCBmaXguXHJcbmNvbnN0IGNoZWF0eVdpbmRvdyA9IGV2YWwoJ3dpbmRvdycpIGFzIFdpbmRvdyAmIHR5cGVvZiBnbG9iYWxUaGlzO1xyXG5jb25zdCBjaGVhdHlEb2N1bWVudCA9IGV2YWwoJ2RvY3VtZW50JykgYXMgRG9jdW1lbnQgJiB0eXBlb2YgZ2xvYmFsVGhpcztcclxuXHJcbi8vICBiaXRidXJuZXIgZGV2cyBpbmNsdWRlZCBSZWFjdCBhbmQgUmVhY3RET00gaW4gZ2xvYmFsIHdpbmRvdyBvYmplY3QhXHJcbi8vIGltcG9ydCBSZWFjdCwgeyBSZWFjdERPTSB9IGZyb20gJy4uL2xpYi9yZWFjdCc7XHJcbmNvbnN0IFJlYWN0ID0gY2hlYXR5V2luZG93LlJlYWN0O1xyXG5jb25zdCBSZWFjdERPTSA9IGNoZWF0eVdpbmRvdy5SZWFjdERPTTtcclxuY29uc3QgdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZTtcclxuXHJcbmNvbnN0IHN0eWxlID0gYC5iYi1idXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSkgfVxyXG4uYmItYnV0dG9uOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApIH1cclxuLmJiLWJ1dHRvbjphY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgNjEsIDIpIH1gO1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uKHtcclxuICBjaGlsZHJlbixcclxuICBvbkNsaWNrLFxyXG4gIGRpc2FibGVkLFxyXG4gIG1hcmdpbixcclxufToge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIG1hcmdpbj86IHN0cmluZztcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzdHlsZT57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT0nYmItYnV0dG9uJ1xyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXHJcbiAgICAgICAgICBjb2xvcjogJ3JnYigwLCAyMDQsIDApJyxcclxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2IoMzQsIDM0LCAzNCknLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMHB4JyxcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSmV0QnJhaW5zTW9ubywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlXCIsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjc1LFxyXG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXHJcbiAgICAgICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICAgIG1hcmdpbjogbWFyZ2luIHx8ICc4cHggMHB4IDBweCcsXHJcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICAgIGFwcGVhcmFuY2U6ICdub25lJyxcclxuICAgICAgICAgIHRyYW5zaXRpb246XHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zLCBib3gtc2hhZG93IDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zLCBib3JkZXItY29sb3IgMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMsIGNvbG9yIDI1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG5zOiBOUykge1xyXG4gIC8vIGNvbnN0IGNoYW5nZU5hbWUgPSAoKSA9PiB7XHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICBzZXROYW1lKCk7XHJcbiAgLy8gICB9O1xyXG4gIC8vIH07XHJcbiAgLy8gY29uc3QgY2hhbmdlTmFtZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAvLyAgIHNldE5hbWUoKHByZXZOYW1lKSA9PiAocHJldk5hbWUgPT09ICdLYXJhbicgPyAnS2FyYW4yJyA6ICdLYXJhbicpKTtcclxuICAvLyB9LCBbXSk7XHJcbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgbnMucHJpbnQoJ0J1dHRvbiBjbGlja2VkIScpO1xyXG4gIH07XHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBucy5wcmludFJhdyhcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgIGF3YWl0IGNsaWNrSGFuZGxlcigpO1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgIHRlcnRyZlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICk7XHJcbiAgICBhd2FpdCBucy5zbGVlcCg1MDAwKTtcclxuICB9XHJcbn1cclxuIl19