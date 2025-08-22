+++
title = "ALOHA Protocol in Computer Network"
date = "2025-08-22"
draft = false
description = "ALOHA is a multiple access protocol for transmission of data via a shared network channel. It operates in the medium access control sublayer (MAC sublayer) of the open systems interconnection (OSI) model. Using this protocol,
    several data streams originating from multiple nodes are transferred "
image = "/data_communication_computer_network/images/aloha_protocols.jpg"
imageBig = "/data_communication_computer_network/images/aloha_protocols.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# ALOHA Protocol in Computer Network

URL: https://www.tutorialspoint.com/data_communication_computer_network/aloha_protocol.htm

ALOHAis a multiple access protocol for transmission of data via a shared network channel. It operates in the medium access control sublayer (MAC sublayer) of theopen systems interconnection(OSI) model. Using this protocol,
    several data streams originating from multiple nodes are transferred through a multi-point transmission channel.

InALOHA, each node or station transmits a frame without trying to detect whether the transmission channel is idle or busy. If the channel is idle, then the frames will be successfully transmitted. If two frames attempt to occupy the
    channel simultaneously, collision of frames will occur and the frames will be discarded. These stations may choose to retransmit the corrupted frames repeatedly until successful transmission occurs.

In pure ALOHA, the time of transmission is continuous. Whenever a station has an available frame, it sends the frame. If there is collision and the frame is destroyed, the sender waits for a random amount of time before retransmitting it.

Slotted ALOHA reduces the number of collisions and doubles the capacity of pure ALOHA. The shared channel is divided into a number of discrete time intervals called slots. A station can transmit only at the beginning of each slot. However, there can still be collisions if more than one station tries to transmit at the beginning of the same time slot.

![Image](/data_communication_computer_network/images/aloha_protocols.jpg)
